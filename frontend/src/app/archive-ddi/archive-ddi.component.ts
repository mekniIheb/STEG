import { Component } from '@angular/core';

@Component({
  selector: 'app-archive-ddi',
  templateUrl: './archive-ddi.component.html',
  styleUrls: ['./archive-ddi.component.css']
})
export class ArchiveDDIComponent {
  matriculeFiscale: string = '';
  dateDebut: string = '';
  dateFin: string = '';

  archives: { mois: string, annee: number, matricules: string[] }[] = [
    { mois: 'Janvier', annee: 2023, matricules: ['123456'] },
    { mois: 'Février', annee: 2023, matricules: ['789012'] },
    { mois: 'Mars', annee: 2023, matricules: ['345678'] },
  ];

  filteredArchives: { mois: string, annee: number, matricules: string[] }[];

  constructor() {
    this.filteredArchives = this.archives;
  }

  search(): void {
    this.filteredArchives = this.archives.filter(archive =>
      (this.matriculeFiscale === '' || archive.matricules.includes(this.matriculeFiscale)) 
    );
  }


}


