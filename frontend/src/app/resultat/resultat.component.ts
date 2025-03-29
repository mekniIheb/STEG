import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DemandeService} from "../services/demande.service";

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent {
  f = {
    matriculfiscal: '',
    message3: '',
    message4: '',
  }
  demande: any;

  constructor(private router: Router, private demandeService: DemandeService) {
  }

  submitForm(): void {
    console.log("------" + this.f.matriculfiscal);
    this.demandeService.getDemandeFinalByMatricule(this.f.matriculfiscal).subscribe(
      (data: any) => {
        this.demande = data;
        console.log("status  :" + this.demande.status);
        if (this.demande.status === 'ACCEPTEE') {
          console.log("status ACCEPTEE");
          this.router.navigate(['result', this.demande.id]);
        } else if (this.demande.status === 'REFUSEE') {
          console.log("status REFUSEE");
          alert("La demande a été refusée.");
        } else {
          console.log("status **");
          alert("La demande est en cours de traitement.");
        }
      },
      error => {
        console.error("Error:", error);
        alert("Veuillez saisir un matricule valide.");
      }
    );
  }


}
