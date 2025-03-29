import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DemandeService} from "../services/demande.service";
import jsPDF from "jspdf";


@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  demande: any;

  pdfSrc: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private demandeService: DemandeService
  ) {
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

  envoyerVersClient(id: any) {
    this.demandeService.setStatusDemandeCLIENT(id).subscribe(data => {
      alert("Demande envoye vers client ")
    })
    this.router.navigate(['voir-les-demandes-en-cours'])

  }
}
