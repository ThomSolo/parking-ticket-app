// src/app/ticket-list/ticket-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.tickets = this.ticketService.getTickets();
  }

  deleteTicket(id: number): void {
    this.ticketService.deleteTicket(id);
    this.tickets = this.ticketService.getTickets();
  }
}
