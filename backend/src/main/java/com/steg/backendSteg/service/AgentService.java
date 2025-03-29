package com.steg.backendSteg.service;

import com.steg.backendSteg.domain.Agent;
import com.steg.backendSteg.repo.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgentService {
    @Autowired
    AgentRepository agentRepository;

    public Agent updateAgent(Agent agentRequest) {
        Agent agent = agentRepository.findById(agentRequest.getId()).
                orElseThrow(() -> new RuntimeException("Agent not found with id: " + agentRequest.getId()));
        agent.setUsername(agentRequest.getUsername());
        agent.setNomEtPrenom(agentRequest.getNomEtPrenom());
        agent.setMatricule(agentRequest.getMatricule());
        agent.setAdresse(agentRequest.getAdresse());
        agent.setEmail(agentRequest.getEmail());
        agent.setNumero(agentRequest.getNumero());
        agent.setRole(agentRequest.getRole());
        return agentRepository.save(agent);
    }


}
