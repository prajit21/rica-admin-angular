import { Component, inject, input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { hotelLocation } from "../../../../shared/interface/hotel";

@Component({
  selector: "app-hotel-location",
  templateUrl: "./hotel-location.html",
  styleUrl: "./hotel-location.scss",
})
export class HotelLocation {
  public sanitizer = inject(DomSanitizer);

  readonly hotelLocation = input<hotelLocation>();

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
