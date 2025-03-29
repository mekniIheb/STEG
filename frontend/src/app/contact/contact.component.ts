import { Component } from '@angular/core';
import {Contact} from "../models/Contact";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private contactService: ContactService) {
  }
  contact: Contact = {
    nom: '',
    email: '',
    telephone: '',
    societe: '',
    message: ''
  };
  onSubmit(): void {
    this.contactService.saveContact(this.contact).subscribe(
      () => {
        // Handle success
        console.log('Contact saved successfully.');
        // Clear the form after submission
        this.contact = {
          nom: '',
          email: '',
          telephone: '',
          societe: '',
          message: ''
        };
      },
      error => {
        // Handle error
        console.error('Error saving contact:', error);
      }
    );
  }
}
