package com.steg.backendSteg.repo;

import com.steg.backendSteg.domain.PasswordResetToken;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PasswordResetTokenRepository extends MongoRepository<PasswordResetToken, Long> {
    PasswordResetToken findByToken(String token);
}
