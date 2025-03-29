import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-accept',
  templateUrl: './detail-accept.component.html',
  styleUrls: ['./detail-accept.component.css']
})
export class DetailAcceptComponent {
 // Méthode pour transférer un message au demandeur
 sendMessage() {
  // Implémentez le code pour transférer le message au demandeur ici
  alert('Message transféré au demandeur !');
}
}
