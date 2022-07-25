import { Component } from '@angular/core';
import { EventService } from 'src/app/events/shared/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'events-list',
  template: `
    <div class="well hoverwell thumbnail">
      <h1>Upcoming Angular Events</h1>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail> <!-- Property binding using brackets [] -->
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent {
  //initialize events
  events: any = [];
  //add constructor to the class calling private service from shared folder "eventService"
  constructor(
    private eventServices: EventService,
    private toastr: ToastrService
  ) { }
  //ngOnInit function based on the component life cycle that will bind to events and retrieve from event.service.ts getEvent() function
  ngOnInit() {
    this.events = this.eventServices.getEvent();
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName + "success");
  }
}
