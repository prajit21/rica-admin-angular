import { Component, inject } from "@angular/core";

import { TourAccommodation } from "./tour-accommodation/tour-accommodation";
import { TourGallery } from "./tour-gallery/tour-gallery";
import { TourHighlight } from "./tour-highlight/tour-highlight";
import { TourItinerary } from "./tour-itinerary/tour-itinerary";
import { TourLocation } from "./tour-location/tour-location";
import { TourPolicy } from "./tour-policy/tour-policy";
import { TourReviews } from "./tour-reviews/tour-reviews";
import { TourTab } from "./tour-tab/tour-tab";
import { tour } from "../../../shared/interface/tours";
import { ToursService } from "../../../shared/services/tours.service";

@Component({
  selector: "app-tour-package-details",
  templateUrl: "./tour-package-details.html",
  styleUrl: "./tour-package-details.scss",
  imports: [
    TourTab,
    TourHighlight,
    TourItinerary,
    TourGallery,
    TourAccommodation,
    TourLocation,
    TourReviews,
    TourPolicy,
  ],
})
export class TourPackageDetails {
  private tourService = inject(ToursService);

  public tourDetail: tour;

  public activeTab = "highlight";

  constructor() {
    this.tourService.tour().subscribe((response) => {
      this.tourDetail = response;
    });
  }

  getTabValue(value: string) {
    this.activeTab = value;
  }
}
