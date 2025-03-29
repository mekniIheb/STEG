package com.steg.backendSteg.repo;

import com.steg.backendSteg.domain.ERole;
import com.steg.backendSteg.domain.User;
import org.apache.catalina.LifecycleState;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);
    List<User> findByRoles_NameNot(ERole role);
}
