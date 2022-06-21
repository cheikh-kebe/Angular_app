import { Component } from '@angular/core';
import { EventService } from 'src/shared/event.service';

@Component({
  selector: 'events-list',
  template: `
    <div class="well hoverwell thumbnail">
      <h1>Upcoming Angular Events</h1>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail [event] = "event" ></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent {
  //initialize events 
  events: any = [];
  //add constructor to the class calling private service from shared folder "eventService"
  constructor( private eventServices : EventService) {

  }
  //ngOnInit function based on the component life cycle that will bind to events and retrieve from event.service.ts getEvent() function
  ngOnInit(){
    this.events = this.eventServices.getEvent()
  
  }
}
