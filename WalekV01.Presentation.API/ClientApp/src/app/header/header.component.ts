import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../services/current-user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isConnecrted : boolean = false;
  constructor(private auth: AuthService,private user :CurrentUserService) {
    if(this.user.load()){
      this.isConnecrted = true;
    }
   }

  ngOnInit(): void {

  }
  logout() {

  }

}
