import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  show = false;
  message = '';

  showToast(message: string): void {
    this.message = message;
    this.show = true;
    console.log("toast affiche")
    setTimeout(() => this.show = false, 5000); // Auto-hide after 5 seconds
  }

  close(): void {
    this.show = false;
  }
}
