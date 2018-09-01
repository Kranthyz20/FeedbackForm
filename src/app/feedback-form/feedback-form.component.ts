import { Component, OnInit, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { feedback } from '../shared/userfeedback';
import { fieldData } from '../shared/fielddata';
import { MatDialogRef, MatDialog,MAT_DIALOG_DATA } from '@angular/material';
import { expand } from '../animations/app.animations';
import { SurveyService } from '../services/survey.service';
import { customData } from '../shared/customdatajson';
import { serverData } from 'src/app/shared/serverdata';
import { processData } from '../shared/finalDataClass.';
import {ConfirmModalComponent} from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [expand()]
})
export class FeedbackFormComponent implements OnInit {

  processFormdata: processData = new processData();
  errMsg: string;
  submitted: boolean = false;
  spinner: boolean = false;
  finalData: customData;
  average: number;
  formBindings = fieldData;
  feedbackForm: FormGroup;
  userFeedback: feedback;
  errMess: string;
  customDataJson: customData = new customData();
  readytopost: customData;

  formErrors = {
    'ques1': '', 'ques2': '', 'ques3': '', 'ques4': '', 'ques5': '', 'ques6': '', 'ques7': '', 'ques8': '',
    'ques9': '', 'ques10': ''
  };

  validationMessages = {
    'validationMessage': {
      'required': 'We need your comment.',
    }
  };


  constructor(private fb: FormBuilder, private dialog: MatDialog, private survey: SurveyService) {
    this.createForm();
  }
  

  createForm() {
    this.feedbackForm = this.fb.group({
      ques1: ['', Validators.required],
      rating1: '10',
      ques2: ['', Validators.required],
      rating2: '10',
      ques3: ['', Validators.required],
      rating3: '10',
      ques4: ['', Validators.required],
      rating4: '10',
      ques5: ['', Validators.required],
      rating5: '10',
      ques6: ['', Validators.required],
      rating6: '10',
      ques7: ['', Validators.required],
      rating7: '10',
      ques8: ['', Validators.required],
      rating8: '10',
      ques9: ['', Validators.required],
      rating9: '10',
      ques10: ['', Validators.required],
      rating10: '10',
      OptionalComments: ''
    })

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();  //(re)set form validation messages
  };

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty('validationMessage')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }

    this.average = (+this.feedbackForm.value.rating1 + +this.feedbackForm.value.rating2 + +this.feedbackForm.value.rating3
      + +this.feedbackForm.value.rating4 + +this.feedbackForm.value.rating5 + +this.feedbackForm.value.rating6 + +this.feedbackForm.value.rating7
      + +this.feedbackForm.value.rating8 + +this.feedbackForm.value.rating9 + +this.feedbackForm.value.rating10) / 1.0;
  }

  ngOnInit() {
  }

  // openDialog(): void{
  //   this.dialog.open
  //   const dialogRef = this.dialog.open(ConfirmModalComponent, {
  //     width: '200px', height:'200px'    
  //   });
  // };


  clickMethod() {
    if(confirm("Are you sure to submit your feedback?")) {      
      this.onSubmit();
    }
  }

  onSubmit() {
    this.spinner = true;
    this.userFeedback = this.feedbackForm.value;
    this.readytopost = this.processFormdata.process(this.userFeedback, this.average);

    this.survey.postData(this.readytopost)
      .subscribe(dataSubmitted => {
      this.spinner = false; this.submitted = true;
        this.feedbackForm.reset({
          'ques1': '', 'rating1': '10', 'ques2': '', 'rating2': '10', 'ques3': '', 'rating3': '10', 'ques4': '', 'rating4': '10', 'ques5': '', 'rating5': '10',
          'ques6': '', 'rating6': '10', 'ques7': '', 'rating7': '10', 'ques8': '', 'rating8': '10',
          'ques9': '', 'rating9': '10', 'ques10': '', 'rating10': '10'
        });
      },
      err => { this.errMess = <any>err; this.spinner = false; });
  }

}

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'Are you sure to submit your',
// })
// export class submitConfirmationDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
