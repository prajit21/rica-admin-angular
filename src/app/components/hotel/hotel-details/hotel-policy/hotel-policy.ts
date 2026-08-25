import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { hotelPolicy } from "../../../../shared/interface/hotel";

@Component({
  selector: "app-hotel-policy",
  templateUrl: "./hotel-policy.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./hotel-policy.scss",
})
export class HotelPolicy {
  readonly hotelPolicy = input<hotelPolicy[]>();
}
