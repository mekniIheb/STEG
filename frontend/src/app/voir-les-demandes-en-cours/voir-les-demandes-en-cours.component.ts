import {Component, OnInit} from '@angular/core';
import {DemandeService} from "../services/demande.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-voir-les-demandes-en-cours',
  templateUrl: './voir-les-demandes-en-cours.component.html',
  styleUrls: ['./voir-les-demandes-en-cours.component.css']
})
export class VoirLesDemandesEnCoursComponent implements OnInit {
  ngOnInit(): void {
this.loadDemandes()
  }
  page: number = 1;
  demandes: any[] = [];
  searchTerm: string = '';

  constructor(private demandeService: DemandeService,private router:Router) {
  }
  loadDemandes() {
    this.demandeService.getDemandStatusGuiResultat().subscribe(res => {
      this.demandes = res;
      console.log("demandes :" + this.demandes)
    })
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

  showPdf(demande :any) {
    this.router.navigate(['/pdf-viewer', demande.id]);
  }
}
