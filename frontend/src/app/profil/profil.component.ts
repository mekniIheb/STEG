import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../services/token-storage.service";
import {ClientService} from "../services/client.service";
import {User} from "../models/user";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  userId: any;
  user: User | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private tokenStorageService: TokenStorageService,
    private clientService: ClientService
  ) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(20)]],
      nomEtPrenom: [''],
      matricule: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      adresse: ['', Validators.required],
      numero: ['', Validators.required],
      password: ['', [Validators.required, Validators.maxLength(120)]]
    });
  }

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.userId = user.id;
    console.log("--" + this.userId);
    if (this.userId) {
      this.loadUserDetails(this.userId);
    }
  }

  loadUserDetails(id: string): void {
    this.clientService.getUserById(id).subscribe(res => {
      this.user = res;
      console.log("--user :" + this.user);
      if (this.user) {
        const userModif = {
          username: this.user.username,
          nomEtPrenom: this.user.nomEtPrenom,
          matricule: this.user.matricule,
          email: this.user.email,
          adresse: this.user.adresse,
          numero: this.user.numero,
          password: this.user.password
        };
        this.userForm.patchValue(userModif);
      }
    });
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    console.log('Form submitted:', this.userForm.value);
  }
}
