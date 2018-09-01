import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatFormFieldModule, MatInputModule,
  MatProgressSpinnerModule, MatTabsModule, MatIconModule, MatListModule,
  MatCardModule, MatButtonModule, MatMenuModule, MatSnackBarModule, MatDialogModule,
  MatSelectModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedbackFormComponent,
    LoginComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmModalComponent]
})
export class AppModule { }
