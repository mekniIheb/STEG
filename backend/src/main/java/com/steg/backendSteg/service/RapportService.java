package com.steg.backendSteg.service;

import com.steg.backendSteg.domain.Demande;
import com.steg.backendSteg.domain.Rapport;
import com.steg.backendSteg.repo.RapportRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RapportService {
    @Autowired
    DemandeService demandeService;
    @Autowired
    RapportRepo rapportRepo;

    public Rapport saveRapport(Rapport rapport, String demandeId) {
        Demande demande = demandeService.getDemandeById(demandeId);
        rapport.setDemande(demande);
        return rapportRepo.save(rapport);

    }

    public Rapport findRapportByDemand(String demandeId) {
        Demande demande = demandeService.getDemandeById(demandeId);
        return rapportRepo.findByDemande(demande);
    }
}
