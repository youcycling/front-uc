import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Alan'
  password = ''
  errorMessage='Invalid Credentials'
  invalidLogin=false

  constructor(private router: Router, private hardcodedAuthenticateService:HardcodedAuthenticationService, 
    private basicAuthenticateService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  // handleLogin(){

  //   //console.log(this.username)
  //   // if (this.username==='Alan' && this.password==='dummy'){
  //     if(this.hardcodedAuthenticateService.authenticate(this.username, this.password)){
  //     this.router.navigate(['welcome/', this.username])
  //     this.invalidLogin=false
  //   }else {
  //     this.invalidLogin = true
  //   }
  // }

  handleBasicAuthLogin(){

    //console.log(this.username)
    // if (this.username==='Alan' && this.password==='dummy'){
      this.basicAuthenticateService.executeBasiAuthenticationService(this.username, this.password)
      .subscribe(
        data =>{
          console.log(data)
          this.router.navigate(['welcome/', this.username])
          this.invalidLogin=false
        },
        error=>{
          console.log(error)
          this.invalidLogin = true
        }

      )   
  }

  handleJWTAuthLogin(){

    //console.log(this.username)
    // if (this.username==='Alan' && this.password==='dummy'){
      this.basicAuthenticateService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data =>{
          console.log(data)
          this.router.navigate(['welcome/', this.username])
          this.invalidLogin=false
        },
        error=>{
          console.log(error)
          this.invalidLogin = true
        }

      )   
  }

}
