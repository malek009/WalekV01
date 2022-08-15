import { Component, OnInit } from '@angular/core';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Actor } from '../models/actor';
import { ActorService } from '../services/actor.service';

@Component({
  selector: 'app-actorcrud',
  templateUrl: './actorcrud.component.html',
  styleUrls: ['./actorcrud.component.scss']
})
export class ActorcrudComponent implements OnInit {

  actors! : Actor[] ;
  actorsSub! : Subscription;
  constructor(private actorService : ActorService,
              private confirmationService: ConfirmationService,
              private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.loadData();
  }

  loadData () {
    this.actors   = [] ;
    this.actorsSub = this.actorService.actorsSubject.subscribe(
      (actors: Actor[]) => {
        this.actors = actors;
        console.log(this.actors);

      }
    );
    this.actorService.getCategories();
  }

  confirm(id : number | undefined) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
          console.log(id);

            //Actual logic to perform a confirmation
        }
    });
}
}
