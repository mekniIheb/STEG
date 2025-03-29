

import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Demande } from '../models/demande';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-verfication-unitee',
  templateUrl: './verfication-unitee.component.html',
  styleUrls: ['./verfication-unitee.component.css']
})
export class VerficationUniteeComponent implements OnInit{

  formData = {
    matriculfiscal:'',
    nom:'',
    gerant:'',
    cin:'',
    adresse:'',
    email: '',
    adressprojet:'',
    onFileSelected1:'',
    onFileSelected2:'',
    onFileSelected3:'',
    onFileSelected4:'',
    remarque:'',
   
};


demandes: any[] = [];

  constructor(private demandeService: DemandeService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadDemandes("DDI");
    
  }

  loadDemandes(role:string) {
    this.demandeService.getAllDemandes(role).subscribe((demandes: any[]) => {
      this.demandes = demandes;
    });
  }
  getSafeUrl(DemandeDDI:any): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(DemandeDDI);
  }
  
  isAccepted: boolean = false;
  showSendToSection: boolean = false;
  showSaveButton: boolean = false; // Déclaration de la propriété showSaveButto

  accept() {
    // Implémentez la logique pour accepter ici
    this.isAccepted = true;
    this.showSaveButton = true; // Afficher le bouton "Enregistrer" lorsque le bouton "Accepter" est cliqué
    
  }

  save() {
    // Implémentez la logique de sauvegarde ici
    // Par exemple, vous pouvez simplement afficher un message dans la console pour le moment
   
   console.log("Données sauvegardées avec succès!");
   this.showSendToSection = true;

  }

  showSendTo() {
    // Implémentez la logique pour afficher la section "Envoyer vers" ici
    // Par exemple, vous pouvez simplement inverser la valeur de showSendToSection pour afficher ou masquer la section
    this.showSendToSection = !this.showSendToSection;
  }
  validerOperation() {
  
    alert("Envoyer avec succès !");}
    
  refuserOperation() {
    alert("Message de refus envoyé");
  }
  

}