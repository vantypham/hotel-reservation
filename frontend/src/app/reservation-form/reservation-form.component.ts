import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{
  

  reservationForm: FormGroup = new FormGroup({});

  //constructor - Dependency Enjection
  constructor(
    private formBuilder: FormBuilder, 
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required], //formControlName field in HTML
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email ]],
      roomNumber: ['', Validators.required]
    })
    // handle /edit/43473874837 /edit/:id
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // get param value of :id , and call service to get Reservation, then patch value to Form
      ////let res = this.reservationService.get(id);
      this.reservationService.get(id)?.subscribe(reservation => {
        if (reservation) 
          this.reservationForm.patchValue(reservation)
      })
    }
  }


  onSubmit() {
    if (this.reservationForm.valid) {
      console.log('valid');

      let r: Reservation = this.reservationForm.value;

      //handle case /edit/:id navigated to here (use same form)
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        //UPDATE/EDIT case
        // this.reservationService.update(id, r);
        this.reservationService.update(id, r).subscribe(()=>{
          console.log('update processed.');
          
        })
      } else {
        // ADD case
        // call service to add 
        
        this.reservationService.add(r).subscribe(()=>{
          console.log('add processed.');
          
        });
      }

      
      // navigate to list page
      this.router.navigate(['/list']);
      
    }
  }


}
