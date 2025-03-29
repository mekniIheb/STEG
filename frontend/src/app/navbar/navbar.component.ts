import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private tokenService: TokenStorageService,
              private router: Router,
              private tokenStorageService: TokenStorageService) {
  }

  roles: string[] = [];
  isLoggedIn = false;

  logout() {
    this.tokenService.signOut()
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      console.log("user:" + user)
      console.log("roles:" + this.roles)
    }
  }

  showNav(): boolean {
    if (this.roles[0] === 'ROLE_CLIENT') {
      return false;
    } else
      return true;
  }
}
