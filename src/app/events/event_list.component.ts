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
  events: any[];
  
  constructor( private eventServices : EventService) {
    this.events = eventServices.getEvent()
  }
}
