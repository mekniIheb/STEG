package com.steg.backendSteg.repo;

import com.steg.backendSteg.domain.Authmodel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AuthRepository extends MongoRepository<Authmodel, String> {
}
