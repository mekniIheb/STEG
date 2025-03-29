import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-en-cours',
  templateUrl: './detail-en-cours.component.html',
  styleUrls: ['./detail-en-cours.component.css']
})
export class DetailEnCoursComponent {
  showConfirmation() {
    // Afficher l'alerte de confirmation
    alert('Le message a été envoyé par e-mail avec succès !');
  }
}
