import { User } from './../_models/user';
import { Observable } from 'rxjs';
import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService) {}

  ngOnInit(): void
  {

  }
  login() {
    this.accountService.login(this.model).subscribe(Response =>{
      console.log(Response);
    }, error =>{
      console.log(error);
    })
  }

  logout(){
    this.accountService.logout();
  }

}
