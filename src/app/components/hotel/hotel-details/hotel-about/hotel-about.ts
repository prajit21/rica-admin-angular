import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { hotelAbout } from "../../../../shared/interface/hotel";

@Component({
  selector: "app-hotel-about",
  templateUrl: "./hotel-about.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./hotel-about.scss",
})
export class HotelAbout {
  readonly hotelAbout = input<hotelAbout[]>();
}
