import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    // console.log('Before ' + this.isUserLoggedIn());
    if (username === 'Alan' && password === 'dummy') {
      sessionStorage.setItem('authenticaterUser', username);
      // console.log('After ' + this.isUserLoggedIn())
      return true;
    } else {
      return false;
    }
  }

    isUserLoggedIn(){
      let user  = sessionStorage.getItem('authenticaterUser')
      //console.log(user);
      return !(user === null)
    }

    logoutUser(){
      sessionStorage.removeItem('authenticaterUser')
    }
} 