import { Component } from '@angular/core';

@Component({
  selector: 'app-archive-dpte',
  templateUrl: './archive-dpte.component.html',
  styleUrls: ['./archive-dpte.component.css']
})
export class ArchiveDpteComponent {
  matriculeFiscale: string = '';
  dateDebut: string = '';
  dateFin: string = '';

  archives: { mois: string, annee: number, matricules: string[] }[] = [
    { mois: 'Janvier', annee: 2023, matricules: ['123456'] },
    { mois: 'Février', annee: 2023, matricules: ['789012'] },
    { mois: 'Mars', annee: 2023, matricules: ['345678'] },
    // Ajoutez d'autres données d'exemple ici
  ];

  filteredArchives: { mois: string, annee: number, matricules: string[] }[];

  constructor() {
    this.filteredArchives = this.archives;
  }

  search(): void {
    this.filteredArchives = this.archives.filter(archive =>
      (this.matriculeFiscale === '' || archive.matricules.includes(this.matriculeFiscale)) &&
      (this.dateDebut === '' || this.dateFin === '' || this.isDateInRange(archive.mois, archive.annee, this.dateDebut, this.dateFin))
    );
  }

  isDateInRange(mois: string, annee: number, dateDebut: string, dateFin: string): boolean {
    const debut = new Date(dateDebut);
    const fin = new Date(dateFin);
    const dateArchive = new Date(`${mois} 1, ${annee}`);
    return dateArchive >= debut && dateArchive <= fin;
  }
}



