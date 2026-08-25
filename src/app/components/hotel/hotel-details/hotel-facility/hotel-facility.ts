import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { hotelFacility } from "../../../../shared/interface/hotel";

@Component({
  selector: "app-hotel-facility",
  templateUrl: "./hotel-facility.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./hotel-facility.scss",
})
export class HotelFacility {
  readonly hotelFacility = input<hotelFacility[]>();
}
