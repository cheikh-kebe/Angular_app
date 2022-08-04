import { Component } from '@angular/core';//angular component
import { EventService } from 'src/app/events/shared/event.service';//Event Data 
import { ActivatedRoute } from "@angular/router";//Activate route
@Component({
  templateUrl: "./event-details.component.html",
  styles: [`
    .container{
      padding-left:20px; 
      padding-right: 20px;
    }
    .event-image{ 
      height: 100px;
    }
  `]
})

export class EventDetailsComponent {
  event:any
  constructor(
    private eventService: EventService, 
    private route:ActivatedRoute/*call the activatedRoute module into the constructor*/){
      
    }
  ngOnInit(){
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])/*pass the id params as the activatedRoute so this will dynamicly set the id*/
  }
}