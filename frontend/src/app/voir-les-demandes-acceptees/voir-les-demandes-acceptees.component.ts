import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeAccepteService } from '../services/demande-accepte.Service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-voir-les-demandes-acceptees',
  templateUrl: './voir-les-demandes-acceptees.component.html',
  styleUrls: ['./voir-les-demandes-acceptees.component.css']
})
export class VoirLesDemandesAccepteesComponent implements OnInit {
  formData = {
    nomdeentreprise: '',
    matriculfiscal: '',
    nomdugérant: '',
    nom: '',
    cin: '',
    email: '',
    adresseprojet: '',
    message: '',
    onFileSelected1: '',
    onFileSelected2: '',
    onFileSelected3: '',
    onFileSelected4: '',
  };

  demandesAcceptees: any[] = [];

  constructor(private demandeAccepteService: DemandeAccepteService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadDemandesAcceptees();
  }

  loadDemandesAcceptees() {
    this.demandeAccepteService.getDemandesAcceptees().subscribe((demandes: any[]) => {
      this.demandesAcceptees = demandes;
    });
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
