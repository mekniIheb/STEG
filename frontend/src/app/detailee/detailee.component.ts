import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailee',
  templateUrl: './detailee.component.html',
  styleUrls: ['./detailee.component.css']
})
export class DetaileeComponent {
  formData = {
    teldocacc:'',
    teldoc:'',
    matriculfiscal:'',
    nom:'',
    cin:'',
    email: '',
    adressprojet:'',
    message: '',
    message9: '',
    message1: '',
    message2: '',
    message3: '',
    message4: '',
    message5: '',
    message6: '',
   
};
constructor(private router: Router) { }

submitForm(): void {
  if (this.formData.matriculfiscal && this.formData.matriculfiscal.length === 13) {
    var codeNumerique = this.formData.matriculfiscal.substring(0, 7);
    var cleControle = this.formData.matriculfiscal.substring(7, 8);
    var codeTVA = this.formData.matriculfiscal.substring(8, 9);
    var codeCategorie = this.formData.matriculfiscal.substring(9, 10);
    var etablissement =this.formData.matriculfiscal.substring(10, 13);

    // Vérification des formats
    var isNumeric = /^\d/.test(codeNumerique);
    var isAlpha = /^[a-zA-Z]/.test(cleControle) && /^[a-zA-Z]+$/.test(codeTVA) && /^[a-zA-Z]+$/.test(codeCategorie);
    var isEtablissement = /^\d/.test(etablissement);

    if (!isNumeric && !isAlpha && !isEtablissement) {
        alert("Matricule fiscal invalide.");return;
    }
} else {
    alert("le Matricule fiscale doit etre de 13 caractaire");return;
}
if (this.formData.nom=="" || this.formData.nom.length < 2 && this.formData.nom.length > 30) {
  alert("mon de votre entreprise et invalide");
  return;
}
if (!this.formData.cin || this.formData.cin.length < 8 || this.formData.cin.length >8) {
 alert("Le numéro de cin est invalide.");
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
if (!this.formData.email || !emailRegex.test(this.formData.email)) {
  alert('L\'e-mail va contenir un "." "t @ merci de verifier votre mail.');
  return;
}

if (!this.formData.teldoc) {
  alert("insérer votre dossier.");
  return;
}
if (!this.formData.teldocacc) {
  alert("insérer votre dossier d'acceptation.");
  return;
}
if (!this.formData.adressprojet || this.formData.adressprojet.length < 2 && this.formData.adressprojet.length > 300) {
  alert("L'''adresse de projet est invalide.");
  return;
}
if (!this.formData.message || this.formData.message.length < 2 && this.formData.message.length > 300) {
  alert("crée votre remarque.");
  return;
}

this.router.navigate(['/accueil']);
}
}
