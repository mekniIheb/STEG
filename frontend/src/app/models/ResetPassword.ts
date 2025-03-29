export class ResetPassword{
  password?:string;
  password1?:string;

  constructor(password: string, password1: string) {
    this.password = password;
    this.password1 = password1;
  }
}
