import { Component, inject } from "@angular/core";

import { FeatherIcons } from "../../shared/components/ui/feather-icons/feather-icons";
import { Pagination } from "../../shared/components/ui/pagination/pagination";
import { bookingDetails } from "../../shared/interface/booking";
import { BookingService } from "../../shared/services/booking.service";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.html",
  styleUrl: "./booking.scss",
  imports: [FeatherIcons, Pagination],
})
export class Booking {
  private bookingService = inject(BookingService);

  public booking: bookingDetails[];

  constructor() {
    this.bookingService.booking().subscribe((response) => {
      this.booking = response.booking;
    });
  }
}
