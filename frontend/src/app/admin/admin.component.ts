import {Component, OnInit} from '@angular/core';
import {ClientService} from '../services/client.service';
import {User} from "../models/user";
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[] = []
  isLoggedIn = false;
  searchTerm: string = '';

  constructor(private clientService: ClientService,
              private authService: AuthService
  ) {
  }

  form: any = {
    id: null,
    username: null,
    nomEtPrenom: null,
    matricule: null,
    adresse: null,
    email: null,
    numero: null,
    password: null,
    roles: null
  };
  showPassword = false;
  isEditing = false;
  page: number = 1;

  ngOnInit(): void {

    this.loadAllUsers();
  }

  filteredUsers() {
    if (!this.searchTerm) {
      return this.users;
    }
    const term = this.searchTerm.toLowerCase();
    return this.users.filter(user =>
      user.username.toLowerCase().includes(term) ||
      user.matricule.toLowerCase().includes(term)
    );
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    const {id, username, nomEtPrenom, matricule, adresse, numero, email, password, roles} = this.form;
    const newUser: any = {
      id,
      username,
      nomEtPrenom,
      matricule,
      adresse,
      email,
      numero,
      password,
      roles: [roles]
    };
    console.log(newUser + "//")
    if (this.isEditing && this.isEditing !== null) {
      this.clientService.updateUser(newUser.id, newUser).subscribe(
        response => {
          console.log('User updated successfully', response);
          this.resetForm();
          this.loadAllUsers();
        },
        error => {
          console.error('Error updating user', error);
        }
      );
    } else {
      console.log(newUser.roles[0] + "**")
      if (newUser.roles[0] == 'ROLE_GUICHET') {
        newUser.roles[0] = 'guichet'
      }
      if (newUser.roles[0] == 'ROLE_DPTE') {
        newUser.roles[0] = 'dpte'
      }
      if (newUser.roles[0] == 'ROLE_DDI') {
        newUser.roles[0] = 'ddi'
      }
      console.log(newUser.roles[0] + "**0")

      this.authService.saveUser(newUser).subscribe(
        response => {
          console.log('User added successfully', response);
          this.resetForm();
          this.loadAllUsers();
        },
        error => {
          console.error('Error adding user', error);
        }
      );
    }
  }

  resetForm(): void {
    this.isEditing = false;
    this.form = {
      id: null,
      username: null,
      nomEtPrenom: null,
      matricule: null,
      adresse: null,
      email: null,
      numero: null,
      password: null,
      roles: null
    };
  }

  loadAllUsers() {
    this.clientService.getUser().subscribe(res => {
      this.users = res;
      console.log("users:" + this.users)
      this.users.filter(a => {
        console.log("aa" + a.roles[0].name)
      })
    });
  }

  onEditUser(user: User): void {
    this.isEditing = true;
    this.form = {
      id: user.id,
      username: user.username,
      nomEtPrenom: user.nomEtPrenom,
      matricule: user.matricule,
      adresse: user.adresse,
      email: user.email,
      numero: user.numero,
      roles: user.roles[0].name // Assuming roles is an array and we need the first role
    };
  }

  deleteUser(id: string): void {
    const confirmation = confirm("Are you sure you want to delete this user?");
    if (confirmation) {
      this.clientService.deleteUser(id).subscribe({
        next: (response) => {
          console.log('User deleted successfully:', response);
          this.loadAllUsers();
        },
        error: (error) => {
          console.error('Error deleting user:', error);
        }
      });
    }
  }

  reset() {
    this.isEditing = false;
    this.form.resetForm()

  }
}
