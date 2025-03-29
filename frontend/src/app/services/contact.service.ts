import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../models/Contact";
const Api = 'http://localhost:8088/api/contact/save';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {}
  saveContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(Api, contact);
  }}
