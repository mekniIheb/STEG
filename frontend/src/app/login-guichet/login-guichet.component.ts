import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-guichet',
  templateUrl: './login-guichet.component.html',
  styleUrls: ['./login-guichet.component.css']
})
export class LoginGuichetComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login(): void {
    // Vérification de l'e-mail
    if (!this.email || this.email.indexOf('@') === -1) {
      alert("erreur le @ est obligatoir dans le mail.");
      return;
    }

    // Vérification du mot de passe
    if (!this.password || this.password.length < 6) {
      alert("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    // Si toutes les validations passent, rediriger vers la page "menus-guichet"
    this.router.navigate(['/menus-guichet']);
  }
}
