import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  finalSubmit: FeedbackFormComponent;
  constructor(private dialogRef: MatDialogRef<ConfirmModalComponent>) { }

  ngOnInit() {
  }

  onYes() {
    this.finalSubmit.onSubmit();
  }

  onNo() {
    this.dialogRef.close();
  }
}
