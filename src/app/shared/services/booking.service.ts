import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { booking } from "../interface/booking";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  private http = inject(HttpClient);

  // booking
  booking(): Observable<booking> {
    return this.http.get<booking>("assets/json/booking.json");
  }
}
