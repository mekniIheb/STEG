package com.steg.backendSteg.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Document(collection = "Agents")
public class Agent {
    @Id
    private String id;
    private String username;
    private String nomEtPrenom;
    private String matricule;
    private String email;
    private String adresse;
    private int numero;
    private ERole role;
    @JsonIgnore
    private List<Demande> demandes;
    private List<Detaille> detaille;

    @Override
    public String toString() {
        return "Agent{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", nomEtPrenom='" + nomEtPrenom + '\'' +
                ", matricule='" + matricule + '\'' +
                ", email='" + email + '\'' +
                ", adresse='" + adresse + '\'' +
                ", numero=" + numero +
                ", role=" + role +
                ", demandes=" + demandes +
                ", detaille=" + detaille +
                '}';
    }

    public Agent() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public ERole getRole() {
        return role;
    }

    public void setRole(ERole role) {
        this.role = role;
    }

    public String getNomEtPrenom() {
        return nomEtPrenom;
    }

    public void setNomEtPrenom(String nomEtPrenom) {
        this.nomEtPrenom = nomEtPrenom;
    }

    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public List<Demande> getDemandes() {
        return demandes;
    }

    public void setDemandes(List<Demande> demandes) {
        this.demandes = demandes;
    }

    public List<Detaille> getDetaille() {
        return detaille;
    }

    public void setDetaille(List<Detaille> detaille) {
        this.detaille = detaille;
    }

    public Agent(String id, String username, String nomEtPrenom, String matricule, String email, String adresse, int numero) {
        this.id = id;
        this.username = username;
        this.nomEtPrenom = nomEtPrenom;
        this.matricule = matricule;
        this.email = email;
        this.adresse = adresse;
        this.numero = numero;
    }
}

