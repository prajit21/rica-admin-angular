import { Component, inject } from "@angular/core";

import { HotelAbout } from "./hotel-about/hotel-about";
import { HotelDetail } from "./hotel-detail/hotel-detail";
import { HotelFacility } from "./hotel-facility/hotel-facility";
import { HotelLocation } from "./hotel-location/hotel-location";
import { HotelPolicy } from "./hotel-policy/hotel-policy";
import { HotelReview } from "./hotel-review/hotel-review";
import { HotelRooms } from "./hotel-rooms/hotel-rooms";
import { HotelTab } from "./hotel-tab/hotel-tab";
import { hotel, hotelDetail } from "../../../shared/interface/hotel";
import { HotelService } from "../../../shared/services/hotel.service";

@Component({
  selector: "app-hotel-details",
  templateUrl: "./hotel-details.html",
  styleUrl: "./hotel-details.scss",
  imports: [
    HotelDetail,
    HotelTab,
    HotelAbout,
    HotelRooms,
    HotelFacility,
    HotelLocation,
    HotelReview,
    HotelPolicy,
  ],
})
export class HotelDetails {
  private hotelService = inject(HotelService);

  public hotel: hotel;
  public hotelDetails: hotelDetail;
  public activeTab = "rooms";

  constructor() {
    this.hotelService.hotel().subscribe((response) => {
      this.hotel = response;
    });
  }

  getTabValue(value: string) {
    this.activeTab = value;
  }
}
