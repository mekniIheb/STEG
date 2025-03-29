import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {ToastComponent} from "../toast/toast.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],

})
export class InscriptionComponent {
  constructor(private _snackBar: MatSnackBar,
              private router: Router,
              private authService: AuthService
  ) {
  }

  showPassword = false;
  form: any = {
    username: null,
    nomEtPrenom: null,
    matricule: null,
    adresse: null,
    email: null,
    numero: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;

  onSubmit(): void {

    const {username, nomEtPrenom, matricule, adresse, numero, email, password} = this.form;
    console.log("-------", this.form)
    this.authService.register(username, nomEtPrenom, matricule, adresse, numero, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        this.router.navigate(['/login'])
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }
}
