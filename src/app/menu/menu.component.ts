import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
 // isUserLoogedIn: boolean = false;

   constructor(private hardcodedAuthenticateService: HardcodedAuthenticationService) { }

  ngOnInit() {

    //this.isUserLoogedIn= this.hardcodedAuthenticateService.isUserLoggedIn();
  }



}
