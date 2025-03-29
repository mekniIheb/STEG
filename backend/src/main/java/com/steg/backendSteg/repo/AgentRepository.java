package com.steg.backendSteg.repo;
import com.steg.backendSteg.domain.Agent;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AgentRepository extends MongoRepository<Agent, String> {

    List<Agent> findByMatricule(String matricule);


}
