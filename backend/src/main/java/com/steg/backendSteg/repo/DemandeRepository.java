package com.steg.backendSteg.repo;

import com.steg.backendSteg.domain.Agent;
import com.steg.backendSteg.domain.Demande;
import com.steg.backendSteg.domain.Status;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface DemandeRepository extends MongoRepository<Demande, String> {
    List<Demande> findByStatus(Status status);

    List<Demande> findByStatusAndIsDDINotNullAndIsDPTENotNull(Status status);

    List<Demande> findByStatusIn(List<Status> statuses);

    Demande findByMatriculfiscalAndStatusIn(String matricule, List<Status> statuses);

    List<Demande> findByAgent_Id(String agentId);

    Optional<Demande> findByMatriculfiscal(String matricule);
}
