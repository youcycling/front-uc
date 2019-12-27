import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

message='Some Welcome message'
welcomeMessageFromService:String
welcomePathVariableMessageFromService:String
name = ''

  constructor(private router: ActivatedRoute,
    private service: WelcomeDataService
    ) { }

  ngOnInit() {

  //console.log(this.message)
    console.log(this.router.snapshot.params['name'])
    this.name = this.router.snapshot.params['name'];
  }

  getWelcomeMessage(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
    );
    //console.log('last line of getWelcomeMessage')
    console.log('welcome Message getWelcomeMessage')
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('getWelcomeMessageWithParameter()')
  }

  handleSuccessfulResponse(response){
    //console.log(response);
    //console.log(response.message);
    this.welcomeMessageFromService= response.message
  }

  handleErrorResponse(error){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }
  

}
