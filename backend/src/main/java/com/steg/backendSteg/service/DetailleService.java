package com.steg.backendSteg.service;
import com.steg.backendSteg.repo.AgentRepository;
import com.steg.backendSteg.domain.Agent;
import com.steg.backendSteg.domain.Detaille;
import com.steg.backendSteg.domain.ERole;
import com.steg.backendSteg.domain.Status;
import org.springframework.beans.factory.annotation.Autowired;
import com.steg.backendSteg.repo.DetailleRepository;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class DetailleService {
    private final DetailleRepository detailleRepository;
    private final AgentRepository agentRepository;


    @Autowired
    public DetailleService(DetailleRepository detailleRepository, AgentRepository agentRepository) {
        this.detailleRepository = detailleRepository;
        this.agentRepository = agentRepository;
    }

    public Detaille enregistrerDetaille(Detaille detaille) {
        detaille.setDateDebut(LocalDateTime.now());
        Agent agent = null;
        List<Agent> agents = agentRepository.findAll();
        Detaille finalDetaille = detaille;
        Optional<Agent> optionalAgent = agents.stream()
                .filter(a -> a.getEmail().equals(finalDetaille.getEmail()))
                .findFirst();

        if (optionalAgent.isPresent()) {
            agent = optionalAgent.get();
        }



        List<Detaille> agentDetaille = agent.getDetaille();

        detaille.setAgent(agent);
        detaille = detailleRepository.save(detaille);
        detaille.setAgent(null);
        if (agentDetaille == null) {
            agentDetaille = new ArrayList<>();
        }
        agentDetaille.add(detaille);
        agent.setDetaille(agentDetaille);
        agentRepository.save(agent);
        return detaille;
    }

    public List<Detaille> getDetailleByRole(ERole ERole) {
        List<Detaille> filteredDetaille = new ArrayList<>();
        List<Detaille> allDetaille = detailleRepository.findAll();

        if (ERole.equals(ERole.ROLE_GUICHET)) {
            for (Detaille detaille : allDetaille) {
                if (detaille.getStatus().equals(Status.EN_COURS_GU) || detaille.getStatus().equals(Status.ACCEPTEE) || detaille.getStatus().equals(Status.REFUSEE)) {
                    filteredDetaille.add(detaille);
                }
            }
        }
        if (ERole.equals(ERole.ROLE_DPTE)) {
            for (Detaille detaille : allDetaille) {
                if (detaille.getStatus() == Status.EN_COURS_DPTE) {
                    filteredDetaille.add(detaille);
                }
            }
        }
        if (ERole.equals(ERole.ROLE_DDI)) {
            for (Detaille detaille : allDetaille) {
                if (detaille.getStatus() == Status.EN_COURS_DDI) {
                    filteredDetaille.add(detaille);
                }
            }
        }
        return filteredDetaille;
    }

    public Detaille patchDetailleStatus(String idDetaille, Detaille detaille) {
        Detaille detailleToUpdate = detailleRepository.findById(idDetaille)
                .orElseThrow(() -> new IllegalArgumentException("Demande not found with ID: " + idDetaille));

        detailleToUpdate.setStatus(detaille.getStatus());
        if(detaille.getStatus().equals(Status.ACCEPTEE) || detaille.getStatus().equals(Status.REFUSEE)){
            detailleToUpdate.setRapport(detaille.getRapport());
        }
        return detailleRepository.save(detailleToUpdate);
    }


}
