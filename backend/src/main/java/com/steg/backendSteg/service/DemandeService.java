package com.steg.backendSteg.service;

import com.steg.backendSteg.domain.Agent;
import com.steg.backendSteg.domain.Demande;
import com.steg.backendSteg.domain.ERole;
import com.steg.backendSteg.domain.Status;
import com.steg.backendSteg.repo.AgentRepository;
import com.steg.backendSteg.repo.DemandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class DemandeService {
    private final DemandeRepository demandeRepository;
    private final AgentRepository agentRepository;
    private final NotificationService notificationService;


    @Autowired
    public DemandeService(DemandeRepository demandeRepository, AgentRepository agentRepository, NotificationService notificationService) {
        this.demandeRepository = demandeRepository;
        this.agentRepository = agentRepository;
        this.notificationService = notificationService;
    }

    public Demande enregistrerDemande(Demande demande, String idAgent) {
        demande.setDateDebut(LocalDateTime.now());
        Agent agent = agentRepository.findById(idAgent)
                .orElseThrow(() -> new RuntimeException("Agent not found with id: " + idAgent));

        List<Demande> agentDemandes = agent.getDemandes();
        demande.setAgent(agent);
        demande.setStatus(Status.EN_COURS_GU);
        demande = demandeRepository.save(demande);
        demande.setAgent(null);
        if (agentDemandes == null) {
            agentDemandes = new ArrayList<>();
        }
        agentDemandes.add(demande);
        agent.setDemandes(agentDemandes);
        agentRepository.save(agent);

        return demande;
    }

    public List<Demande> getDemandesRefuseesEtAcceptees() {
        List<Status> statuses = Arrays.asList(Status.ACCEPTEE, Status.REFUSEE);
        return demandeRepository.findByStatusIn(statuses);
    }

    public Demande getDemandeFinalByMatricule(String matricule) throws Exception {
        if (demandeRepository.findByMatriculfiscal(matricule).isEmpty()){
            throw new Exception("saisir a valid matricule ");
        }
        List<Status> statuses = Arrays.asList(Status.ACCEPTEE, Status.REFUSEE);
        return demandeRepository.findByMatriculfiscalAndStatusIn(matricule, statuses);
    }

    private String getDestinataireEmail(ERole ERole) {
        if (ERole.equals(ERole.ROLE_DPTE)) {
            return "benkileni.aziza@etudiant-fst.utm.tn";
        } else if (ERole.equals(ERole.ROLE_DDI)) {
            return "kacemnesrin@gmail.com";
        } else {
            throw new IllegalArgumentException("Role non pris en charge pour l'envoi d'e-mails");
        }
    }

    public Demande patchDemandeStatus(Demande demande, String status) {
        Demande demandeToUpdate = demandeRepository.findById(demande.getId())
                .orElseThrow(() -> new IllegalArgumentException("Demande not found with ID: " + demande.getId()));
        demandeToUpdate.setStatus(Status.valueOf(status));
        notificationService.envoyerEmail("mail eli bich taba3tho", "hello", "hello");
        return demandeRepository.save(demandeToUpdate);
    }

    public Demande getDemandeById(String demandeId) {
        return demandeRepository.findById(demandeId).orElseThrow(()
                -> new RuntimeException("Demande not found with id: " + demandeId));
    }

    public List<Demande> getDemandeByAgent(String agentId) {

        return demandeRepository.findByAgent_Id(agentId);

    }

    public List<Demande> getAllDemande() {
        return demandeRepository.findAll();
    }

    public List<Demande> getAllDemandeStatusGuichet() {
        return demandeRepository.findByStatus(Status.EN_COURS_GU);
    }

    public List<Demande> getAllDemandeStatusGuichetResultat() {
        return demandeRepository.findByStatusAndIsDDINotNullAndIsDPTENotNull(Status.EN_COURS_GU);
    }

    public List<Demande> getAllDemandeStatusDDi() {
        return demandeRepository.findByStatus(Status.EN_COURS_DDI);
    }

    public List<Demande> getAllDemandeStatusDPTE() {
        return demandeRepository.findByStatus(Status.EN_COURS_DPTE);
    }

    public Demande setStatusDemandeRefuse(String demandeId) {
        Demande demande = getDemandeById(demandeId);
        demande.setStatus(Status.REFUSEE);
        return demandeRepository.save(demande);
    }

    public Demande setStatusDemandeDPTE(String demandeId) {
        Demande demande = getDemandeById(demandeId);
        demande.setIsDDI(false);
        demande.setIsDPTE(true);
        demande.setStatus(Status.EN_COURS_DPTE);
        return demandeRepository.save(demande);
    }

    public Demande setStatusDemandeDDI(String demandeId) {
        Demande demande = getDemandeById(demandeId);
        demande.setIsDDI(true);
        demande.setIsDPTE(false);
        demande.setStatus(Status.EN_COURS_DDI);
        return demandeRepository.save(demande);
    }

    public Demande setStatusDemandeGUI(String demandeId) {
        Demande demande = getDemandeById(demandeId);
        demande.setStatus(Status.EN_COURS_GU);
        return demandeRepository.save(demande);
    }

    public Demande setStatusDemandeCLIENT(String demandeId) {
        Demande demande = getDemandeById(demandeId);
        demande.setStatus(Status.ACCEPTEE);
        return demandeRepository.save(demande);
    }
}
