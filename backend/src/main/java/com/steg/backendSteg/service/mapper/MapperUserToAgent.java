package com.steg.backendSteg.service.mapper;

import com.steg.backendSteg.domain.Agent;
import com.steg.backendSteg.domain.Role;
import com.steg.backendSteg.domain.User;


public class MapperUserToAgent {
    public static Agent mapUserToAgent(User user) {
        Agent agent = new Agent();
        agent.setId(user.getId());
        agent.setUsername(user.getUsername());
        agent.setNomEtPrenom(user.getNomEtPrenom());
        agent.setMatricule(user.getMatricule());
        agent.setEmail(user.getEmail());
        agent.setAdresse(user.getAdresse());
        agent.setNumero(user.getNumero());
        System.out.println("agent 0 :--->"+agent);
        if (!user.getRoles().isEmpty()) {
            Role role = user.getRoles().iterator().next();
            System.out.println("role :--->"+agent);
            agent.setRole(role.getName());
        }
System.out.println("agent :--->"+agent);
        return agent;
    }
}
