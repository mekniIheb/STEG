import {Component, OnInit} from '@angular/core';
import {DemandeService} from '../services/demande.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-voir-demande-ddi',
  templateUrl: './voir-demande-ddi.component.html',
  styleUrls: ['./voir-demande-ddi.component.css']
})
export class VoirDemandeDDIComponent implements OnInit {
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

  page: number = 1;
  searchTerm: string = '';
  demandes: any[] = [];

  constructor(private demandeService: DemandeService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.loadDemandes()
  }

  loadDemandes() {
    this.demandeService.getDemandStatusDDI().subscribe(data=>{
      this.demandes=data;
      console.log("***"+this.demandes[0])
    })
  }

  getSafeUrl(DemandeDdi: any): SafeResourceUrl {
    const url = this.formData.onFileSelected2;
    return this.sanitizer.bypassSecurityTrustResourceUrl(DemandeDdi);
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
