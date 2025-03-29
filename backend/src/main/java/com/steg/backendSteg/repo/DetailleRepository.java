package com.steg.backendSteg.repo;
import com.steg.backendSteg.domain.Detaille;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DetailleRepository extends MongoRepository<Detaille, String> {
}

