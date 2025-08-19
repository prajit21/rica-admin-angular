import { Component, inject } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { cabDetail } from "../../../shared/interface/cab";
import { gallery } from "../../../shared/interface/restaurant";
import { CabService } from "../../../shared/services/cab.service";

@Component({
  selector: "app-car-detail",
  templateUrl: "./car-detail.html",
  styleUrl: "./car-detail.scss",
  imports: [CarouselModule],
})
export class CarDetail {
  private cabService = inject(CabService);

  public cabImages: gallery[];
  public cabDetails: cabDetail[];

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

  constructor() {
    this.cabService.cab().subscribe((response) => {
      this.cabImages = response.cabImages;
      this.cabDetails = response.cabDetails;
    });
  }
}
