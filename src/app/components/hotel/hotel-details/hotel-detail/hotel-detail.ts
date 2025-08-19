import { Component, input } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { hotelImages } from "../../../../shared/interface/hotel";

@Component({
  selector: "app-hotel-detail",
  templateUrl: "./hotel-detail.html",
  styleUrl: "./hotel-detail.scss",
  imports: [CarouselModule],
})
export class HotelDetail {
  readonly type = input<string>();
  readonly images = input<hotelImages[]>();

  public options = {
    loop: false,
    nav: false,
    dots: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      416: {
        items: 2,
      },
      506: {
        items: 3,
      },
      700: {
        items: 4,
      },
    },
  };
}
