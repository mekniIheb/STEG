package com.steg.backendSteg.repo;

import com.steg.backendSteg.domain.ERole;
import com.steg.backendSteg.domain.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
