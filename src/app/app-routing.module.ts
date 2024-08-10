import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tickets', component: TicketListComponent },
  { path: 'add-ticket', component: AddTicketComponent },
  { path: 'edit-ticket/:id', component: EditTicketComponent },
  { path: 'ticket-detail/:id', component: TicketDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
