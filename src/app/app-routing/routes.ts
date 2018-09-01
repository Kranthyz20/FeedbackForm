import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'feedback', component: FeedbackFormComponent },    
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];