import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { FeatherIcons } from "../../../shared/components/ui/feather-icons/feather-icons";
import { Pagination } from "../../../shared/components/ui/pagination/pagination";
import { hotels } from "../../../shared/interface/hotel";
import { HotelService } from "../../../shared/services/hotel.service";

@Component({
  selector: "app-all-hotel",
  templateUrl: "./all-hotel.html",
  styleUrl: "./all-hotel.scss",
  imports: [RouterLink, FeatherIcons, Pagination],
})
export class AllHotel {
  private hotelService = inject(HotelService);

  public hotel: hotels[];

  constructor() {
    this.hotelService.hotel().subscribe((response) => {
      this.hotel = response.hotels;
    });
  }
}
