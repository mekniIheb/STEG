import { Component, OnInit } from '@angular/core';
import { DemandeRefuse } from '../services/demande-refuse';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-voir-les-demandes-refusees',
  templateUrl: './voir-les-demandes-refusees.component.html',
  styleUrls: ['./voir-les-demandes-refusees.component.css']
})
export class VoirLesDemandesRefuseesComponent implements OnInit {
  formData = {
    nomdeentreprise:'',
    matriculfiscal:'',
    nomdugérant:'',
    nom:'',
    cin:'',
    email: '',
    adresseprojet:'',
    message: '',
    onFileSelected1:'',
    onFileSelected2:'',
    onFileSelected3:'',
    onFileSelected4:'', 
  };

  demandesRefusees: any[] = [];

  constructor(private demandeRefuseService: DemandeRefuse, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadDemandesRefusees();
  }

  loadDemandesRefusees() {
    this.demandeRefuseService.getDemandesRefusees().subscribe((demandes: any[]) => {
      this.demandesRefusees = demandes;
    });
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
