import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { AuthServiceService } from '../services/auth-service.service';

export interface Login {
  alreadyGiven: boolean;
  code: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  data: Login;
  user = { 'perid': '', 'password': '' };
  userPeridList = ['id846223', 'id851321','id834057'];
  userPassword = '12345';
  errorLabel: string = '';
  errMsg: string;
  taken: boolean;
  spinner: boolean = false;

  constructor(private router: Router, private authService: AuthServiceService, private location: Location) {
  }

  ngOnInit() {
  }

  onLoginFormSubmit(userDetails,event:any) {
    //event.stopPropagation();
    this.errorLabel = '';
    this.spinner = true;
    if (this.userPeridList.includes(userDetails.perid.toLowerCase()) && userDetails.password == this.userPassword) {      
      this.authService.AuthenticateUser(userDetails).subscribe(given => {
        this.spinner = false;        
        if (given.alreadyGiven == true) {          
          this.taken = true;
        }
        else {         
          this.router.navigate(['/feedback']);
          sessionStorage.setItem('perid', userDetails.perid.toLowerCase())
        }
      },
        errMsg => this.errMsg = <any>errMsg);
      this.errorLabel = '';
    }
    else {      
      this.errorLabel = 'Per ID or Password is incorrect. Please check!';
      this.spinner = false;
    }    
  }
}
