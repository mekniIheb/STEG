package com.steg.backendSteg.service;

import com.steg.backendSteg.repo.PasswordResetTokenRepository;
import com.steg.backendSteg.repo.UserRepository;
import com.steg.backendSteg.domain.PasswordResetToken;
import com.steg.backendSteg.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
public class AuthService {

    @Autowired
    private PasswordResetTokenRepository tokenRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public String generatePasswordResetToken(String email) {
        String token = UUID.randomUUID().toString();
        PasswordResetToken resetToken = new PasswordResetToken();
        resetToken.setToken(token);
        resetToken.setUserEmail(email);
        resetToken.setExpiryDate(new Date(System.currentTimeMillis() + 3600000)); // 1 hour expiration
        tokenRepository.save(resetToken);
        return token;
    }

    public boolean validatePasswordResetToken(String token) {
        PasswordResetToken resetToken = tokenRepository.findByToken(token);
        return resetToken != null && resetToken.getExpiryDate().after(new Date());
    }

    public String getEmailByToken(String token) {
        PasswordResetToken resetToken = tokenRepository.findByToken(token);
        if (resetToken != null) {
            return resetToken.getUserEmail();
        }
        return null; // Le token n'existe pas ou est expiré
    }

    public boolean resetPassword(String email, String newPassword) {
        User user = userRepository.findByEmail(email).get();

        if (user != null) {
            // Crypter le nouveau mot de passe
            String encryptedPassword = passwordEncoder.encode(newPassword);

            // Mettre à jour le mot de passe de l'utilisateur avec le nouveau mot de passe crypté
            user.setPassword(encryptedPassword);
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }
}
