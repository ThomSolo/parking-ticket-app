// src/app/ticket.service.ts
import { Injectable } from '@angular/core';
import { Ticket } from './ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [];
  private idCounter = 0;

  constructor() {
    const savedTickets = localStorage.getItem('tickets');
    if (savedTickets) {
      this.tickets = JSON.parse(savedTickets);
      this.idCounter = this.tickets.length > 0 ? Math.max(...this.tickets.map(t => t.id)) + 1 : 0;
    }
  }

  getTickets(): Ticket[] {
    return this.tickets;
  }

  getTicket(id: number): Ticket | undefined {
    return this.tickets.find(ticket => ticket.id === id);
  }

  addTicket(ticket: Omit<Ticket, 'id'>): void {
    const newTicket = { ...ticket, id: this.idCounter++ };
    this.tickets.push(newTicket);
    this.saveToLocalStorage();
  }

  updateTicket(id: number, updatedTicket: Omit<Ticket, 'id'>): void {
    const index = this.tickets.findIndex(ticket => ticket.id === id);
    if (index !== -1) {
      this.tickets[index] = { ...updatedTicket, id };
      this.saveToLocalStorage();
    }
  }

  deleteTicket(id: number): void {
    this.tickets = this.tickets.filter(ticket => ticket.id !== id);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('tickets', JSON.stringify(this.tickets));
  }
}
