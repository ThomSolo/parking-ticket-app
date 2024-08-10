// src/app/edit-ticket/edit-ticket.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss']
})
export class EditTicketComponent implements OnInit {
  ticketForm: FormGroup;
  ticketId!: number;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.ticketForm = this.fb.group({
      licensePlate: ['', Validators.required],
      issueDate: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.ticketId = Number(this.route.snapshot.paramMap.get('id'));
    const ticket = this.ticketService.getTicket(this.ticketId);
    if (ticket) {
      this.ticketForm.setValue({
        licensePlate: ticket.licensePlate,
        issueDate: ticket.issueDate,
        amount: ticket.amount
      });
    }
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      this.ticketService.updateTicket(this.ticketId, this.ticketForm.value);
      this.router.navigate(['/tickets']);
    }
  }
}
