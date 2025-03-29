import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-snackbar-dialog',
  templateUrl: './snackbar-dialog.component.html',
  styleUrls: ['./snackbar-dialog.component.css']
})
export class SnackbarDialogComponent {
  message: string;

  constructor(
    public dialogRef: MatDialogRef<SnackbarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.message = data.message;
  }

  close(): void {
    this.dialogRef.close();
  }
}
