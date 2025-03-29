import {Component, OnInit, ViewChild} from '@angular/core';
import { DemandeService } from '../services/demande.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {TokenStorageService} from "../services/token-storage.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {DemandeDetailPopupComponent} from "../demande-detail-popup/demande-detail-popup.component";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  displayedColumns: string[] = ['id','matriculfiscal', 'nom', 'adresse', 'voir'];
  private agentId: any;
  demandes: any[] = [];
  dataSource = new MatTableDataSource(this.demandes);
  page: number = 1;
  constructor(private demandeService: DemandeService,
              private tokenStorageService: TokenStorageService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.agentId=user.id;
    this.getDemandesByAgent()

  }
  selectedDemande: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getDemandesByAgent(): void {
    this.demandeService.getDemandesByAgent(this.agentId).subscribe(
      data => {
        this.demandes = data;
        console.log("data :"+this.demandes)
      },
      error => {
        alert("There was an error!")
        console.error('There was an error!', error);
      }
    );
  }

}

