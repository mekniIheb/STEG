package com.steg.backendSteg.domain;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.steg.backendSteg.config.RoleDeserializer;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Document(collection = "users")
public class User {
    @Id
    private String id;

    @NotBlank
    @Size(max = 20)
    private String username;
    private String nomEtPrenom;
    @NotBlank
    private String matricule;

    @NotBlank
    @Size(max = 50)
    @Email
    @Indexed(unique = true)
    private String email;
    @NotBlank
    private String adresse;
    @NotBlank
    private int numero;

    @NotBlank
    @Size(max = 120)
    private String password;

    @DBRef
    @JsonDeserialize(contentUsing = RoleDeserializer.class)
    private Set<Role> roles = new HashSet<>();

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", nomEtPrenom='" + nomEtPrenom + '\'' +
                ", matricule='" + matricule + '\'' +
                ", email='" + email + '\'' +
                ", adresse='" + adresse + '\'' +
                ", numero=" + numero +
                ", password='" + password + '\'' +
                ", roles=" + roles +
                '}';
    }

    public User(String username, String nomEtPrenom, String matricule, String email, String adresse, int numero, String password) {
        this.username = username;
        this.nomEtPrenom = nomEtPrenom;
        this.matricule = matricule;
        this.email = email;
        this.adresse = adresse;
        this.numero = numero;
        this.password = password;
    }

    public String getNomEtPrenom() {
        return nomEtPrenom;
    }

    public void setNomEtPrenom(String nomEtPrenom) {
        this.nomEtPrenom = nomEtPrenom;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
