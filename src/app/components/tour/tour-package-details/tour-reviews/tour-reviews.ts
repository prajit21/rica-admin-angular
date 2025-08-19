import { Component, input } from "@angular/core";

import { tourReview } from "../../../../shared/interface/tours";

@Component({
  selector: "app-tour-reviews",
  templateUrl: "./tour-reviews.html",
  styleUrl: "./tour-reviews.scss",
})
export class TourReviews {
  readonly review = input<tourReview[]>();
}
