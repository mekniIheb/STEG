package com.steg.backendSteg.domain;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@Document(collection = "Detaille")
public class Detaille {
    @Id
    private String id;
    private String onFileSelected;
    private String matriculfiscal;
    private String nom;
    private String cin;
    private String email;
    private String adresseProjet;
    private String onFileSelected1;
    private String onFileSelected2;
    private String onFileSelected3;
    private String onFileSelected4;
    private String message;
    private LocalDateTime dateDebut;
    private TypeDemande typeDemande;
    private Status status;
    private Agent agent;
    private String rapport;
    private List<Detaille> detaille;


}
