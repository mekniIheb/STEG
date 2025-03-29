import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DemandeService} from "../services/demande.service";

@Component({
  selector: 'app-demande-detail-popup',
  templateUrl: './demande-detail-popup.component.html',
  styleUrls: ['./demande-detail-popup.component.css']
})
export class DemandeDetailPopupComponent implements OnInit {
  constructor(private _Activatedroute: ActivatedRoute, private demandeService: DemandeService) {
  }

  demande: any
  demandeId: any

  ngOnInit(): void {
    this.demandeId = this._Activatedroute.snapshot.params["id"];
    console.log("id  :" + this.demandeId)
    this.getDemande()
  }

  getDemande() {
    this.demandeService.getDemandeById(this.demandeId).subscribe(res => {
      this.demande = res;
      console.log("demande-- :" + this.demande)
    })
  }
}
