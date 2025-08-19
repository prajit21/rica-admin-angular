import { Component, inject } from "@angular/core";

import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
} from "@danielmoncada/angular-datetime-picker";
import { TagInputModule } from "ngx-chips";

import { RoomDetails } from "./room-details/room-details";
import { addHotelDetails } from "../../../shared/interface/hotel";
import { HotelService } from "../../../shared/services/hotel.service";

@Component({
  selector: "app-add-new-hotel",
  templateUrl: "./add-new-hotel.html",
  styleUrl: "./add-new-hotel.scss",
  imports: [
    TagInputModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    RoomDetails,
  ],
})
export class AddNewHotel {
  private hotelService = inject(HotelService);

  public addHotelDetails: addHotelDetails[];

  constructor() {
    this.hotelService.hotel().subscribe((response) => {
      this.addHotelDetails = response.addHotelDetails;
    });
  }
}
