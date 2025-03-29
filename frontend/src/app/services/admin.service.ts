import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent } from '../models/Agent';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  searchByMatricule(matricule: string): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${this.baseUrl}/search`, {
      params: { matricule }
    });
  }

  saveagent(agent: Agent): Observable<any> {
    return this.http.post(this.baseUrl+"/addagent", agent);
  }

  getAllAgent(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${this.baseUrl}/allagent`);
  }

  deleteAgent(agentId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/dagent/${agentId}`);
  }

  updateAgent(agentId: string, agent: Agent): Observable<Agent> {
    return this.http.put<Agent>(`${this.baseUrl}/putagent/${agentId}`, agent);
  }
  
  
}
