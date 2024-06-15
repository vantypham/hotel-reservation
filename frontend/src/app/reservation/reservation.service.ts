import { Injectable } from '@angular/core';
import { Reservation, Helper } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  //store
  private reservations: Reservation[] = [];
  private apiUrl = 'http://localhost:8080';

  //constructor
  constructor(
    private httpClient: HttpClient
  ) {
    //this is loaded before OnInit lifecycle hooks
    // let savedData = localStorage.getItem("reservations");
    // this.reservations = savedData? JSON.parse(savedData) : [];
  }

  //CRUD
  // GET ALL Reservations
  getAll(): Observable<Reservation[]> {
    // return this.reservations;
    return this.httpClient.get<Reservation[]>(this.apiUrl + "/reservations");
  }
  //GET ID
  get(id: string): Observable<Reservation> | undefined {
    //return this.reservations.find(res => res.id === id);

    return this.httpClient.get<Reservation>(this.apiUrl + "/reservations/"+id);
  }

  add(r: Reservation): Observable<void> {
    //id
    // r.id = Date.now().toString();
    // this.reservations.push(r);
    // localStorage.setItem("reservations", JSON.stringify(this.reservations))

    return this.httpClient.post<void>(this.apiUrl + "/reservations",r);
    
  }
  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + "/reservations/"+id);

    // let index = this.reservations.findIndex(res => res.id === id);
    // this.reservations.splice(index, 1);
    // localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }
  //UPDATE to REST endpoint
  update(id: string, r: Reservation): Observable<void> {
    // let index = this.reservations.findIndex(res => res.id === id);
    // r.id = id;
    // this.reservations[index] = r;
    // localStorage.setItem("reservations", JSON.stringify(this.reservations))
    return this.httpClient.put<void>(this.apiUrl + "/reservations/"+id,r);
  }

  
}
