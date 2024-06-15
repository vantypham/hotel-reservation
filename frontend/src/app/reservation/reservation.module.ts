import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, //import FormsModule to use formgroup
    ReactiveFormsModule, //Reactive Form Validation -> validate form in Typescript class
    // Template-Driven Form validation (HTML) -> validate form in HTML template.
    // -> 2-way binding validation.
    RouterModule, //for Edit button [routerLink]="['/edit', reservation.id]"
    HomeModule
    
  ]
})
export class ReservationModule { }
