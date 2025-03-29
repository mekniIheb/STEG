import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Demande} from '../models/demande';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  globalUrl = "http://localhost:8088/api/demande";

  constructor(private http: HttpClient) {
  }

  getAllDemandes(role: string): Observable<any> {
    return this.http.get(this.globalUrl + "demandes/" + role);
  }

  getDemand(): Observable<any> {
    return this.http.get(this.globalUrl + "/all")
  }

  getDemandStatusGui(): Observable<any> {
    return this.http.get(this.globalUrl + "/allStatusGui")
  }
  getDemandStatusGuiResultat(): Observable<any> {
    return this.http.get(this.globalUrl + "/allStatusGuiResultat")
  }

  getDemandStatusDDI(): Observable<any> {
    return this.http.get(this.globalUrl + "/allStatusDDI")
  }

  getDemandStatusDPTE(): Observable<any> {
    return this.http.get(this.globalUrl + "/allStatusDPTE")
  }

  savedemande(demande: Demande, idAgent: number): Observable<any> {
    console.log("demande :" + demande, "---id agent : " + idAgent)
    const url = `${this.globalUrl}/save?idAgent=${idAgent}`;
    return this.http.post(url, demande);
  }

  getDemandesByAgent(agentId: any): Observable<any> {
    return this.http.get(`${this.globalUrl}/${agentId}`);
  }

  getAllDemandesDPTE(role: string): Observable<any> {
    return this.http.get(this.globalUrl + "demandes/" + role);
  }

  getAllDemandesDDI(role: string): Observable<any> {
    return this.http.get(this.globalUrl + "demandes/" + role);
  }

  getAllDemande(matriculfiscal: string): Observable<any> {
    return this.http.get(this.globalUrl + "demandes/" + matriculfiscal);
  }

  getDemandesRefuseesEtAcceptees(): Observable<any> {
    return this.http.get(this.globalUrl + "/status-refusee-acceptee");
  }

  editStatusOfDemande(deemande: Demande, status: string) {
    const params = new HttpParams().set('status', status);
    return this.http.put(this.globalUrl + "changeStatus", deemande, {params});
  }

  getDemandeById(demandeId: any): Observable<any> {
    return this.http.get(this.globalUrl + "/get_by_id/" + demandeId);
  }
  getDemandeFinalByMatricule(matricule: any): Observable<any> {
    return this.http.get(this.globalUrl + "/get-result-demande/" + matricule);
  }
  setStatusDemandeRefuse(demandeId: any): Observable<any> {
    const url = `${this.globalUrl}/status-refuse/${demandeId}`;
    return this.http.put<any>(url, {});
  }

  setStatusDemandeDPTE(demandeId: any): Observable<any> {
    const url = `${this.globalUrl}/status-DPTE/${demandeId}`;
    return this.http.put<any>(url, {});
  }

  setStatusDemandeDDI(demandeId: any): Observable<any> {
    const url = `${this.globalUrl}/status-DDI/${demandeId}`;
    return this.http.put<any>(url, {});
  }

  setStatusDemandeGUI(demandeId: any): Observable<any> {
    const url = `${this.globalUrl}/status-GUI/${demandeId}`;
    return this.http.put<any>(url, {});
  }
  setStatusDemandeCLIENT(demandeId: any): Observable<any> {
    const url = `${this.globalUrl}/status-CLIENT/${demandeId}`;
    return this.http.put<any>(url, {});
  }

  saveRapport(formData: any, DemandeId: String): Observable<any> {
    console.log("rapport : " + formData)
    const form = new FormData();
    form.append('subject', formData.subject);
    form.append('acceptance', formData.acceptance);
    if (formData.pdf) {
      form.append('pdf', formData.pdf, formData.pdf.name);
    }
    const url = `${this.globalUrl}/save-rapport/${DemandeId}`;
    return this.http.post(url, formData);
  }
}
