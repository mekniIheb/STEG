import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {ResetPassword} from "../models/ResetPassword";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  token: string = '';
  resetSuccessful: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  resetPassword(formValue: any) {
    const request = new ResetPassword(formValue.password, formValue.password1);
    console.log(request + "---")
    if (request.password === request.password1) {
      this.authService.resetPassword(this.token, request.password)
        .subscribe(
          () => {
            this.resetSuccessful = true;
            confirm("Mot de Passe a éte changer")
          },
          error => {
            let res = confirm("Mot de Passe a éte changer")
            if (res) {
              this.router.navigate(['/login'])
              console.error('Erreur lors de la réinitialisation du mot de passe : ', error);
            }
          }
        )
      ;
    } else {
      console.error('Les mots de passe ne correspondent pas.');
    }
  }
}
