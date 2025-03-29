import {Component, OnInit} from '@angular/core';
import {DemandeService} from '../services/demande.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Demande} from '../models/demande';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detaille-user',
  templateUrl: './detaille-user.component.html',
  styleUrls: ['./detaille-user.component.css']
})
export class DetailleUserComponent implements OnInit {

  formData = {
    matriculfiscal: '',
    nom: '',
    gerant: '',
    cin: '',
    adresse: '',
    email: '',
    adressprojet: '',
    onFileSelected1: '',
    onFileSelected2: '',
    onFileSelected3: '',
    onFileSelected4: '',
    remarque: '',

  };


  demandes: any[] = [];
  demandeId = ''
  demande: any
  selectedConnectionType = '';

  constructor(private demandeService: DemandeService, private sanitizer: DomSanitizer,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.loadDemandes("GUICHET");
    this.route.params.subscribe(params => {
      this.demandeId = params['demandeId'];
      this.demandeService.getDemandeById(this.demandeId).subscribe(res => {
        this.demande = res;
      })
    });
  }

  loadDemandes(role: string) {
    this.demandeService.getAllDemandes(role).subscribe((demandes: any[]) => {
      this.demandes = demandes;
    });
  }

  getSafeUrl(demande: any): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(demande);
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

  validerOperation(demande: Demande, status: string) {
    console.log("demande --" + demande)
    console.log("status --" + status)
    if (status == 'EN_COURS_DPTE') {
      this.demandeService.setStatusDemandeDPTE(demande.id).subscribe(data => {
        alert("Validation avec succès : envoyer vers DPTE!");

      })
      this.router.navigate(['voir-les-demande'])
      this.loadDemandes("GUICHET")
    } else if (status == 'EN_COURS_DDI') {
      this.demandeService.setStatusDemandeDDI(demande.id).subscribe(data => {
        alert("Validation avec succès : envoyer vers DDI!");

      })
      this.router.navigate(['voir-les-demande'])
      this.loadDemandes("GUICHET")
    } else {
      console.log("error ")
    }

  }

  refuserOperation(id: any) {
    console.log("id ----", id)
    this.demandeService.setStatusDemandeRefuse(id).subscribe(data => {
      alert("Message de refus envoyé");
    })
    this.router.navigate(['voir-les-demande'])
    this.loadDemandes("GUICHET")
  }


}

