import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../models/Agent';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  globalUrl = "http://localhost:8080/steg/";
URL="http://localhost:8088/api/user"
  constructor(private http:HttpClient) { }

  saveagent(agent:Agent): Observable<any> {
    agent.role ="CLIENT";
    console.log("hello",agent)
    return this.http.post(this.globalUrl+"agent",agent);
  }
  getUserById(id:any): Observable<any> {
    return this.http.get(this.URL+ '/'+id);
  }
  getUser():Observable<any>{
  return this.http.get(this.URL)
  }
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(this.URL+`/${id}`, user);
  }
  deleteUser(id:any):Observable<any>{
  return this.http.delete(this.URL+`/${id}`);
  }
}
