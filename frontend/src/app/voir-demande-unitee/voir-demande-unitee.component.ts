import {Component, OnInit} from '@angular/core';
import {DemandeService} from '../services/demande.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-voir-demande-unitee',
  templateUrl: './voir-demande-unitee.component.html',
  styleUrls: ['./voir-demande-unitee.component.css']
})
export class VoirDemandeUniteeComponent implements OnInit {
  formData = {
    matriculfiscal: '',
    nom: '',
    gerant: '',
    cin: '',
    adresse: '',
    email: '',
    adressprojet: '',
    message: '',
    onFileSelected1: '',
    onFileSelected2: '',
    onFileSelected3: '',
    onFileSelected4: '',
    remarque: '',

  };


  demandes: any[] = [];
  searchTerm: string = '';
  page: number = 1;

  constructor(private demandeService: DemandeService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.loadDemandes();
  }

  loadDemandes() {
    this.demandeService.getDemandStatusDPTE().subscribe(data => {
      this.demandes = data;
    });
  }

  getSafeUrl(demande: any): SafeResourceUrl {
    const url = this.formData.onFileSelected1;
    return this.sanitizer.bypassSecurityTrustResourceUrl(demande);
  }

  filteredUsers() {
    if (!this.searchTerm) {
      return this.demandes;
    }
    const term = this.searchTerm.toLowerCase();
    return this.demandes.filter(demande =>
      demande.matriculfiscal.toLowerCase().includes(term) ||
      demande.cin.toLowerCase().includes(term)
    );
  }
}
