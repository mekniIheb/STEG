import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {TokenStorageService} from "../services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  showPassword = false;

  constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService) {
  }


  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const {email, password} = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.redirectUser();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  redirectUser(): void {
    if (this.roles.includes('ROLE_CLIENT')) {
      this.router.navigate(['accueil']);
    } else if (this.roles.includes('ROLE_ADMIN')) {
      this.router.navigate(['/admin']);  // Default navigation
    } else if (this.roles.includes('ROLE_GUICHET')) {
      this.router.navigate(['/menus-guichet']);  // Default navigation
    }else if (this.roles.includes('ROLE_DPTE')){
      this.router.navigate(['/voir-demande-unitee']);
    }else if (this.roles.includes('ROLE_DDI')){
      this.router.navigate(['/voir-demande-ddi']);
    } else
     {
      console.log("error to log ")
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }
}
