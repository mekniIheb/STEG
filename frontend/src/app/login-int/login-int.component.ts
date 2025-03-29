import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-int',
  templateUrl: './login-int.component.html',
  styleUrls: ['./login-int.component.css']
})
export class LoginIntComponent {
  constructor(private router: Router) { }

  // Définissez votre fonction login() dans votre composant
  login() {
    // Ajoutez ici votre logique de connexion
  
    // Une fois la connexion réussie, naviguez vers la page "menus-unitee"
    this.router.navigate(['/menus-unitee']);
  }
}
