import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DemandeService} from '../services/demande.service';
import {TokenStorageService} from "../services/token-storage.service";

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  base64Result: string | null = null;
  private AgentId: any;

  onFileSelected(event: any, index: number) {
    this.convertToBase64(event.target.files[0], index);
  }

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.AgentId=user.id;
    console.log("--"+this.AgentId)
  }

  file1: File | null = null;
  formData = {
    matriculfiscal: '',
    nom: '',
    gerant: '',
    cin: '',
    adresse: '',
    email: '',
    adresseProjet: '',
    onFileSelected1: '',
    onFileSelected2: '',
    onFileSelected3: '',
    onFileSelected4: '',
    remarque: '',
  };
  data: any;

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router,
              private demandeService: DemandeService) {
  }

  submitForm(): void {
    let submitData = true;
    if (this.formData.matriculfiscal && this.formData.matriculfiscal.length === 13) {
      var codeNumerique = this.formData.matriculfiscal.substring(0, 7);
      var cleControle = this.formData.matriculfiscal.substring(7, 8);
      var codeTVA = this.formData.matriculfiscal.substring(8, 9);
      var codeCategorie = this.formData.matriculfiscal.substring(9, 10);
      var etablissement = this.formData.matriculfiscal.substring(10, 13);

      // Vérification des formats
      var isNumeric = /^\d/.test(codeNumerique);
      var isAlpha = /^[a-zA-Z]/.test(cleControle) && /^[a-zA-Z]+$/.test(codeTVA) && /^[a-zA-Z]+$/.test(codeCategorie);
      var isEtablissement = /^\d/.test(etablissement);

      if (!isNumeric && !isAlpha && !isEtablissement) {
        alert("Matricule fiscal invalide.");
        submitData = false;
      }
    } else {
      alert("le Matricule fiscale doit etre de 13 caractaire");
      submitData = false;
    }
    if (this.formData.nom == "" || this.formData.nom.length < 2 && this.formData.nom.length > 30) {
      alert("mon de votre entreprise et invalide");
      submitData = false;
    }
    if (!this.formData.cin || this.formData.cin.length < 8 || this.formData.cin.length > 8) {
      alert("Le numéro de cin est invalide.");
      submitData = false;
    }
    if (this.formData.gerant == "" || this.formData.gerant.length < 2 && this.formData.gerant.length > 30) {
      alert("mon de votre entreprise et invalide");
      submitData = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!this.formData.email || !emailRegex.test(this.formData.email)) {
      alert('L\'e-mail va contenir un "." "t @ merci de verifier votre mail.');
      submitData = false;
    }
    if (!this.formData.adresseProjet || this.formData.adresseProjet.length < 2 && this.formData.adresseProjet.length > 300) {
      alert("L'''adresse de projet est invalide.");
      submitData = false;
    }
    if (!this.formData.adresse || this.formData.adresse.length < 2 && this.formData.adresse.length > 300) {
      alert("L'''adresse de projet est invalide.");
      submitData = false;
    }
    if (!this.formData.onFileSelected1) {
      alert("insérer votre demande.");
      submitData = false;
    }
    if (!this.formData.onFileSelected2) {
      alert("insérer votre CIN/Passeport.");
      submitData = false;
    }
    if (!this.formData.onFileSelected3) {
      alert("insérer votre Registre de commerce/matricule fiscale.");
      submitData = false;
    }
    if (!this.formData.onFileSelected4) {
      alert("insérer votre Justificatif de paiement.");
      submitData = false;
    }


    if (submitData == true)
      this.adddemande(this.formData)

  }

  adddemande(demandes: any) {
    this.demandeService.savedemande(demandes,this.AgentId).subscribe((result: any) => {
      this.data = result;
      alert("Demande envoyer avec succée");
      this.router.navigate(['/accueil']);
    })
  }


  convertToBase64(file: any, index: number) {


    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (index == 1)
        this.formData.onFileSelected1 = reader.result as string;
      if (index == 2)
        this.formData.onFileSelected2 = reader.result as string;
      if (index == 3)
        this.formData.onFileSelected3 = reader.result as string;
      if (index == 4)
        this.formData.onFileSelected4 = reader.result as string;

    };

    reader.onerror = (error) => {
      console.error('Error occurred while reading the file: ', error);
    };
  }


}
