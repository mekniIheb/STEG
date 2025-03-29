import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Demande } from '../models/demande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeRefuse {

    globalUrl = "http://localhost:8080/steg/";
  
    constructor(private http: HttpClient) { }
  
    getDemandesRefusees(): Observable<any[]> {
      return this.http.get<any[]>(this.globalUrl + 'demandes/refusees');
    }
  
    savedemande(demande: any): Observable<any> {
      return this.http.post(this.globalUrl + "demande", demande);
    }
  }
