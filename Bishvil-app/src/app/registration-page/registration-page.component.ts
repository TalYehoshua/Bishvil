import { Component } from '@angular/core';
import {AF} from "../../providers/af";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  public error: any;

  constructor(private afService: AF, private router: Router) { }

  register(event, name, email, password,status) {
    event.preventDefault();
    this.afService.registerUser(email, password).then((user) => {//,"1").then((user) => {
      this.afService.saveUserInfoFromForm(user.uid, name, email,"1").then(() => {
        this.router.navigate(['']);
      })
        .catch((error) => {
          this.error = error;
        });
    })
      .catch((error) => {
        this.error = error;
        console.log(this.error);
      });
      
  }
}
