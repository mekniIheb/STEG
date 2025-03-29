package com.steg.backendSteg.service;

import com.steg.backendSteg.domain.ERole;
import com.steg.backendSteg.domain.User;
import com.steg.backendSteg.repo.AgentRepository;
import com.steg.backendSteg.repo.UserRepository;
import com.steg.backendSteg.service.mapper.MapperUserToAgent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    AgentService agentService;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    private AgentRepository agentRepository;

    public User getUserById(String userId) {
        return userRepository.findById(userId).orElseThrow(()
                -> new RuntimeException("User not found with id: " + userId));
    }

    public List<User> getAllUsersExceptAdmin() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .filter(user -> user.getRoles().stream()
                        .noneMatch(role -> role.getName() == ERole.ROLE_ADMIN || role.getName() == ERole.ROLE_CLIENT))
                .collect(Collectors.toList());
    }

    public void deleteUser(String userId) {
        userRepository.deleteById(userId);
        agentRepository.deleteById(userId);
    }

    public void updateUser(String id, User userRequest) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setUsername(userRequest.getUsername());
        user.setNomEtPrenom(userRequest.getNomEtPrenom());
        user.setMatricule(userRequest.getMatricule());
        user.setAdresse(userRequest.getAdresse());
        user.setEmail(userRequest.getEmail());
        user.setNumero(userRequest.getNumero());
        if (userRequest.getPassword() != null && !userRequest.getPassword().isEmpty()) {
            user.setPassword(encoder.encode(userRequest.getPassword()));
        }
        user.setRoles(userRequest.getRoles());

        userRepository.save(user);
        agentService.updateAgent(MapperUserToAgent.mapUserToAgent(user));
    }
}
