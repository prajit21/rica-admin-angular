import { Component, input } from "@angular/core";

import { hotelPolicy } from "../../../../shared/interface/hotel";

@Component({
  selector: "app-hotel-policy",
  templateUrl: "./hotel-policy.html",
  styleUrl: "./hotel-policy.scss",
})
export class HotelPolicy {
  readonly hotelPolicy = input<hotelPolicy[]>();
}
