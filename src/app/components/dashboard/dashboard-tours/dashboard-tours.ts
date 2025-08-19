import { Component, inject } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import { category } from "../../../shared/interface/tours";
import { ToursService } from "../../../shared/services/tours.service";

@Component({
  selector: "app-dashboard-tours",
  templateUrl: "./dashboard-tours.html",
  styleUrl: "./dashboard-tours.scss",
  imports: [CarouselModule],
})
export class DashboardTours {
  private tourService = inject(ToursService);

  public tourCategory: category[];

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
      900: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  constructor() {
    this.tourService.tour().subscribe((response) => {
      this.tourCategory = response.tours;
    });
  }
}
