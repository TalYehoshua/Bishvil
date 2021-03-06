import { Component } from '@angular/core';
import {AF} from "../../providers/af";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public error: any;

  constructor(public afService: AF, private router: Router) {}

  loginWithGoogle() {
    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      console.log( "dasdasd");
      this.afService.addUserInfo();
      this.router.navigate(['']);
    })
  }

  loginWithEmail(event, email, password,status){
    event.preventDefault();
    this.afService.loginWithEmail(email, password).then(() => {//,"0").then(() => {
      this.router.navigate(['']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }
}
