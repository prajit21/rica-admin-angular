import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { hotel } from "../interface/hotel";

@Injectable({
  providedIn: "root",
})
export class HotelService {
  private http = inject(HttpClient);

  // Hotel
  hotel(): Observable<hotel> {
    return this.http.get<hotel>("assets/json/hotel.json");
  }
}
