import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DemandeService} from "../services/demande.service";
import jsPDF from "jspdf";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  demande: any;
  imprimerDocument(): void {
    // Get the content of the embedded PDF
    const pdfContentElement = document.getElementById('pdf-content');
    if (pdfContentElement !== null) {
      const embedElement = pdfContentElement.querySelector('embed');
      if (embedElement !== null && 'print' in window) {
        const printWindow = window.open('', '', 'width=1024,height=768');
        printWindow?.document.write(embedElement.outerHTML);
        printWindow?.document.close();
        printWindow?.print();
      } else {
        console.error('Embedded PDF element not found or printing not supported');
      }
    } else {
      console.error('Element with id "pdf-content" not found');
    }
  }


  constructor( private route: ActivatedRoute,
             private router: Router,
             private demandeService: DemandeService) {
}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.demandeService.getDemandeById(id).subscribe(data => {
        this.demande = data;
        this.generatePdf();
      });
    } else {
      console.error('ID is null');
    }
  }
  generatePdf(): void {
    const doc = new jsPDF();
    doc.text(`Matricule Fiscale: ${this.demande.matriculfiscal}`, 10, 10);
    doc.text(`Nom de l'entreprise: ${this.demande.nom}`, 10, 20);
    doc.text(`Nom de gérant: ${this.demande.gerant}`, 10, 30);
    doc.text(`CIN ou Passeport: ${this.demande.cin}`, 10, 40);
    doc.text(`Adresse: ${this.demande.adresse}`, 10, 50);
    doc.text(`Email: ${this.demande.email}`, 10, 60);
    doc.text(`À partir de DPTE: ${this.demande.isDPTE}`, 10, 70);
    doc.text(`À partir de DDI: ${this.demande.isDDI}`, 10, 80);

    // Generate the PDF data URI
    const pdfDataUri = doc.output('datauristring');

    // Ensure the element exists before setting its innerHTML
    const pdfContentElement = document.getElementById('pdf-content');
    if (pdfContentElement) {
      pdfContentElement.innerHTML = `<embed src="${pdfDataUri}" width="100%" height="100%" type="application/pdf">`;
    } else {
      console.error('Element with id "pdf-content" not found');
    }
  }
}
