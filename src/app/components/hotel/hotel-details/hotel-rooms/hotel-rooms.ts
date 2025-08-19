import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { hotelRooms } from "../../../../shared/interface/hotel";

@Component({
  selector: "app-hotel-rooms",
  templateUrl: "./hotel-rooms.html",
  styleUrl: "./hotel-rooms.scss",
  imports: [RouterLink],
})
export class HotelRooms {
  readonly hotelRooms = input<hotelRooms[]>();
}
