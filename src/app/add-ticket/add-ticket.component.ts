// src/app/add-ticket/add-ticket.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent {
  ticketForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router
  ) {
    this.ticketForm = this.fb.group({
      licensePlate: ['', Validators.required],
      issueDate: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      this.ticketService.addTicket(this.ticketForm.value);
      this.router.navigate(['/tickets']);
    }
  }
}
