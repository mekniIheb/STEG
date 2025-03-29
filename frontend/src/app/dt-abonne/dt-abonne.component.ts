import {Component, OnInit} from '@angular/core';
import {DemandeService} from '../services/demande.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dt-abonne',
  templateUrl: './dt-abonne.component.html',
  styleUrls: ['./dt-abonne.component.css']
})
export class DtAbonneComponent implements OnInit {

  demandes: any[] = [];
  demandeId = ''
  DemandeDpte: any


  constructor(private demandeService: DemandeService,
              private sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.demandeId = params['demandeId'];
      console.log("demande id :" + this.demandeId)
      this.demandeService.getDemandeById(this.demandeId).subscribe(res => {
        this.DemandeDpte = res;
      })
    });
  }

  formData = {
    subject: '',
    acceptance: '',
    pdf: '',
  }

  getSafeUrl(DemandeDpte: any): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(DemandeDpte);
  }

  isAccepted: boolean = false;
  showSaveButton: boolean = false;


  save() {
    console.log("form pdf:" + this.formData.pdf)
    console.log("form Subje:" + this.formData.subject)
    console.log("form Acce:" + this.formData.acceptance)
    this.demandeService.saveRapport(this.formData, this.demandeId).subscribe(data => {
      this.demandeService.setStatusDemandeGUI(this.demandeId).subscribe();
      alert("Demande envoyer avec succée");
    })
    this.router.navigate(['voir-demande-unitee'])
    console.log("Données sauvegardées avec succès!");

  }


  refuserOperation(id: any) {
    console.log("id ----", id)
    this.demandeService.setStatusDemandeRefuse(id).subscribe(data => {
      alert("Message de refus envoyé");
      // Navigate and then reload the page
      this.router.navigate(['voir-demande-unitee']).then(() => {
        window.location.reload();
      });
    });
  }

  convertToBase64(file: any, index: number) {


    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (index == 1)
        this.formData.pdf = reader.result as string;


    };

    reader.onerror = (error) => {
      console.error('Error occurred while reading the file: ', error);
    };
  }

  onFileSelected(event: any, index: number) {
    this.convertToBase64(event.target.files[0], index);
  }
}
