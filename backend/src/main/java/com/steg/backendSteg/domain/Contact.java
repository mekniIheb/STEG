package com.steg.backendSteg.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;

@Document(collection = "contacts")
public class Contact {
    @Id
    private String id;
    private String nom;
    @Email
    private String email;
    private int numero ;
    private String societe ;
    private String message;

    public Contact(String id, String nom, String email, int numero, String societe, String message) {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.numero = numero;
        this.societe = societe;
        this.message = message;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getSociete() {
        return societe;
    }

    public void setSociete(String societe) {
        this.societe = societe;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
