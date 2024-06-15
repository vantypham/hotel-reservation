import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations : Reservation[] = [];

  constructor(private reservationService : ReservationService) {}

  // ngOnInit(): void {
  //   this.reservations = this.reservationService.getAll();
  // }
  ngOnInit(): void {
    //this.reservations = 
    this.reservationService.getAll().subscribe(ress => {
      console.log('ngOnInit='+ress);
      this.reservations = ress;
    });
  }
  //CLICK delete
  deleteReservation(id: string) {
    //this.reservationService.delete(id);
    this.reservationService.delete(id).subscribe(()=>{
      console.log('Delete request got processed');
      // //reload
      // this.reservationService.getAll().subscribe(ress => {
      //   this.reservations = ress;
      // });
      this.ngOnInit();
    })
  }

}
