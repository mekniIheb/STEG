import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-demandes-archivees',
  templateUrl: './demandes-archivees.component.html',
  styleUrls: ['./demandes-archivees.component.css']
})
export class DemandesArchiveesComponent implements OnInit {
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
  page: number = 1;
  searchTerm: string = '';

  constructor(private demandeService: DemandeService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadData()
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
  loadData() {
    this.demandeService.getDemandesRefuseesEtAcceptees().subscribe(data => {
      this.demandes = data
      console.log("data demandes :" + this.demandes)
    })
  }
  getSafeUrl(): SafeResourceUrl {
    const url = this.formData.onFileSelected1;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
