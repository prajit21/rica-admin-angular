import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { users } from "../interface/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private http = inject(HttpClient);

  // User
  user(): Observable<users> {
    return this.http.get<users>("assets/json/user.json");
  }
}
