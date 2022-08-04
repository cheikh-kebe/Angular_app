//components
import { EventsListComponent } from "./app/events/event-list/event_list.component";
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
//routes
import { Routes } from "@angular/router";

export const appRoutes:Routes = [
  {path: 'events', component: EventsListComponent},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
]