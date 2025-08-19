import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { cab } from "../interface/cab";

@Injectable({
  providedIn: "root",
})
export class CabService {
  private http = inject(HttpClient);

  // cab
  cab(): Observable<cab> {
    return this.http.get<cab>("assets/json/cab.json");
  }
}
