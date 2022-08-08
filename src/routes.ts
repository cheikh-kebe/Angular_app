//routes
import { Routes } from "@angular/router";
//components
import { EventsListComponent } from "./app/events/event-list/event_list.component";
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { CreateEventComponent } from "./app/events/new-event/create-event.component";

export const appRoutes:Routes = [
  {path: 'events/new', component: CreateEventComponent},
  {path: 'events', component: EventsListComponent},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
]