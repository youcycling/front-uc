import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {


  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    // let username = 'Alan'
    // let password = 'dummy'
    // let basciAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basciAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if (basciAuthHeaderString && username){
      request = request.clone({
        setHeaders: {
          Authorization: basciAuthHeaderString
        }
      })
    }
    return next.handle(request);
  }

}
