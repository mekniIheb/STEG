import {Component, NgZone, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { EmailRequest } from '../models/EmailRequest';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import {HttpErrorResponse} from "@angular/common/http";
import { Overlay } from '@angular/cdk/overlay';
import {MatDialog} from "@angular/material/dialog";
import {SnackbarDialogComponent} from "../snackbar-dialog/snackbar-dialog.component";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string = '';
  message: string = '';

  constructor(private authService: AuthService,private dialog: MatDialog) {}

  forgotPassword(formValue: any) {
    const request = new EmailRequest(formValue.email, '');

    this.authService.forgotPassword(request.email).subscribe(
      () => {
        confirm("Vérifiez votre e-mail.");
      },
      (error: HttpErrorResponse) => {
        confirm("Vérifiez votre e-mail.");
      }
    );
  }


  ngOnInit(): void {
  }
}
