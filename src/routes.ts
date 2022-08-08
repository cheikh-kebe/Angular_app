//components
import { EventsListComponent } from "./app/events/event-list/event_list.component";
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
//routes
import { Routes } from "@angular/router";
import { Error404component } from "./app/error/404.component";
import { EventRouteActivator } from "./app/events/event-details/event-route-activator.service";

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  { path: '404', component: Error404component},
  { path: '', redirectTo: '/events', pathMatch: 'full'}
]