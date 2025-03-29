package com.steg.backendSteg.controller;

import com.steg.backendSteg.domain.ERole;
import com.steg.backendSteg.domain.Role;
import com.steg.backendSteg.domain.User;
import com.steg.backendSteg.payload.request.ForgotPasswordRequest;
import com.steg.backendSteg.payload.request.LoginRequest;
import com.steg.backendSteg.payload.request.ResetPasswordRequest;
import com.steg.backendSteg.payload.request.SignupRequest;
import com.steg.backendSteg.payload.response.JwtResponse;
import com.steg.backendSteg.payload.response.MessageResponse;
import com.steg.backendSteg.repo.AgentRepository;
import com.steg.backendSteg.repo.RoleRepository;
import com.steg.backendSteg.repo.UserRepository;
import com.steg.backendSteg.security.jwt.JwtUtils;
import com.steg.backendSteg.security.service.UserDetailsImpl;
import com.steg.backendSteg.service.AuthService;
import com.steg.backendSteg.service.EmailService;
import com.steg.backendSteg.service.mapper.MapperUserToAgent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;
    @Autowired
    AgentRepository agentRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    private EmailService emailService;
    @Autowired
    private AuthService authService;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        System.out.println(signUpRequest.toString());
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getNomEtPrenom(),
                signUpRequest.getMatricule(),
                signUpRequest.getEmail(),
                signUpRequest.getAdresse(),
                signUpRequest.getNumero(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_CLIENT)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "ddi":
                        Role ddiRole = roleRepository.findByName(ERole.ROLE_DDI)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(ddiRole);

                        break;
                    case "dpte":
                        Role dpteRole = roleRepository.findByName(ERole.ROLE_DPTE)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(dpteRole);

                        break;
                    case "guichet":
                        Role guichetRole = roleRepository.findByName(ERole.ROLE_GUICHET)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(guichetRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_CLIENT)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);
        agentRepository.save(MapperUserToAgent.mapUserToAgent(user));

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/forgot-password")
    public String forgotPassword(@RequestBody ForgotPasswordRequest request) {

        String token = authService.generatePasswordResetToken(request.getEmail());
        String resetLink = "http://localhost:4200/reset-password?token=" + token;
        emailService.sendEmail(request.getEmail(), "Demande de Réinitialisation de Mot de Passe", "Pour réinitialiser votre mot de passe, cliquez sur le lien ci-dessous:\n" + resetLink);

        return "Password reset link has been sent to your email.";
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestParam String token, @RequestBody ResetPasswordRequest request) {
        String email = authService.getEmailByToken(token);
        if (email != null) {

            String newPassword = request.getNewPassword();
            boolean resetSuccessful = authService.resetPassword(email, newPassword);
            if (resetSuccessful) {
                return ResponseEntity.ok("Le mot de passe a été réinitialisé avec succès.");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Une erreur s'est produite lors de la réinitialisation du mot de passe.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Token invalide ou expiré.");
        }
    }
}

