import { Inject, Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { map } from "rxjs";
import { EventService } from "./event.service";
@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {
    
  }

  resolve(){
    return this.eventService.getEvents().pipe(map(events => events))
  }
}