// src/app/ticket-detail/ticket-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket | undefined;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticket = this.ticketService.getTicket(id);
  }
}
