import {Component, OnInit} from '@angular/core';
import {DemandeService} from '../services/demande.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-voir-les-demande',
  templateUrl: './voir-les-demande.component.html',
  styleUrls: ['./voir-les-demande.component.css']
})
export class VoirLesDemandeComponent implements OnInit {
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
    message: '',

  };
  page: number = 1;
  searchTerm: string = '';
  demandes: any[] = [];

  constructor(private demandeService: DemandeService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.loadDemandes()
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
  loadDemandes() {
    this.demandeService.getDemandStatusGui().subscribe(res => {
      this.demandes = res;
      console.log("demandes :" + this.demandes)
    })
  }

  getSafeUrl(): SafeResourceUrl {
    const url = this.formData.onFileSelected1;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
