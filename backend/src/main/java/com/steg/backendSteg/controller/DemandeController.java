package com.steg.backendSteg.controller;

import com.steg.backendSteg.domain.Demande;
import com.steg.backendSteg.domain.Rapport;
import com.steg.backendSteg.service.DemandeService;
import com.steg.backendSteg.service.RapportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/demande/")
public class DemandeController {
    private final DemandeService demandeService;
    private final RapportService rapportService;

    @Autowired
    public DemandeController(DemandeService demandeService, RapportService rapportService) {
        this.demandeService = demandeService;
        this.rapportService = rapportService;
    }

    @PostMapping("save")
    public Demande saveDemande(@RequestBody Demande demande, @RequestParam String idAgent) {
        return demandeService.enregistrerDemande(demande, idAgent);
    }

    @GetMapping("{agentId}")
    public List<Demande> getDemandeByAgent(@PathVariable String agentId) {
        System.out.println("agent id :" + agentId);
        return demandeService.getDemandeByAgent(agentId);
    }


   /* @GetMapping("demandes/{role}")
    public List<Demande> getDemandeByRole(@PathVariable("role") ERole ERole) {
        return demandeService.getDemandeByRole(ERole);
    }*/

    @PutMapping("changeStatus")
    public Demande patchDemandeStatus(@RequestBody Demande demande, @RequestParam String status) {
        return demandeService.patchDemandeStatus(demande, status);
    }

    @GetMapping("get_by_id/{demandeId}")
    public Demande getDemandeById(@PathVariable("demandeId") String demandeId) {
        return demandeService.getDemandeById(demandeId);
    }

    @GetMapping("all")
    public List<Demande> getAllDemande() {
        return demandeService.getAllDemande();
    }

    @GetMapping("allStatusGui")
    public List<Demande> getAllDemandeStatusGuichet() {
        return demandeService.getAllDemandeStatusGuichet();
    }

    @GetMapping("allStatusGuiResultat")
    public List<Demande> getAllDemandeStatusGuichetResultat() {
        return demandeService.getAllDemandeStatusGuichetResultat();
    }

    @GetMapping("allStatusDDI")
    public List<Demande> getAllDemandeStatusDDi() {
        return demandeService.getAllDemandeStatusDDi();
    }

    @GetMapping("allStatusDPTE")
    public List<Demande> getAllDemandeStatusDPTE() {
        return demandeService.getAllDemandeStatusDPTE();
    }

    @PutMapping("status-refuse/{demandeId}")
    public Demande setStatusDemandeRefuse(@PathVariable String demandeId) {
        return demandeService.setStatusDemandeRefuse(demandeId);
    }

    @PutMapping("status-DPTE/{demandeId}")
    public Demande setStatusDemandeDPTE(@PathVariable String demandeId) {
        return demandeService.setStatusDemandeDPTE(demandeId);
    }

    @PutMapping("status-DDI/{demandeId}")
    public Demande setStatusDemandeDDI(@PathVariable String demandeId) {
        return demandeService.setStatusDemandeDDI(demandeId);
    }

    @PutMapping("status-GUI/{demandeId}")
    public Demande setStatusDemandeGUI(@PathVariable String demandeId) {
        return demandeService.setStatusDemandeGUI(demandeId);
    }

    @PutMapping("status-CLIENT/{demandeId}")
    public Demande setStatusDemandeCLIENT(@PathVariable String demandeId) {
        return demandeService.setStatusDemandeCLIENT(demandeId);
    }

    @GetMapping("/status-refusee-acceptee")
    public List<Demande> getDemandesRefuseesEtAcceptees() {
        return demandeService.getDemandesRefuseesEtAcceptees();
    }

    @PostMapping("save-rapport/{demandeId}")
    public Rapport saveRapport(@RequestBody Rapport rapport, @PathVariable String demandeId) {
        return rapportService.saveRapport(rapport, demandeId);
    }

    @GetMapping("get-rapport/{demandeId}")
    public Rapport getRapportByDemande(@PathVariable String demandeId) {
        return rapportService.findRapportByDemand(demandeId);
    }

    @GetMapping("get-result-demande/{matricule}")
    public Demande getDemandeFinalByMatricule(@PathVariable String matricule) throws Exception {
        return demandeService.getDemandeFinalByMatricule(matricule);
    }

}

