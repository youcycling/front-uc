import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor (public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient

  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    console.log('Execute Hello World Bean Service');
  }

    executeHelloWorldServiceWithPathVariable(name){
      // let basicAuthHeaderString = this.createBasicAuthenticateHttpHeader();

      // let headers = new HttpHeaders({
      //   Authorization:basicAuthHeaderString
      // })
      // console.log('executeHelloWorldServiceWithPathVariable(name)');
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`
    // {headers}
    );
    
 }


//  createBasicAuthenticateHttpHeader(){ 
//    let username='Alan'
//    let password='dummy'
//    let basicAuthHeaderString ='Basic ' + window.btoa(username + ':'+ password);
//   return basicAuthHeaderString;
//  }

}
