//routes
import { Routes } from "@angular/router";
//components
import { EventsListComponent } from "./app/events/event-list/event_list.component";
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { CreateEventComponent } from "./app/events/new-event/create-event.component";
import { Error404component } from "./app/error/404.component";
//routes
import { Routes } from "@angular/router";
//service
import { EventRouteActivator } from "./app/events/event-details/event-route-activator.service";

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent},
  { path: 'events', component: EventsListComponent},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  { path: '404', component: Error404component},
  { path: '', redirectTo: '/events', pathMatch: 'full'}
]