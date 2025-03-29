package com.steg.backendSteg.repo;

import com.steg.backendSteg.domain.Demande;
import com.steg.backendSteg.domain.Rapport;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RapportRepo extends MongoRepository<Rapport, String> {
    Rapport findByDemande(Demande demande);

}
