
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeAccepteService {

  globalUrl = "http://localhost:8080/steg/";

  constructor(private http: HttpClient) { }

  getDemandesAcceptees(): Observable<any[]> {
    return this.http.get<any[]>(this.globalUrl + 'demandes/acceptees');
  }

  savedemande(demande: any): Observable<any> {
    return this.http.post(this.globalUrl + "demande", demande);
  }
}