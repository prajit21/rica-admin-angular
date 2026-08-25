import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { tourReview } from "../../../../shared/interface/tours";

@Component({
  selector: "app-tour-reviews",
  templateUrl: "./tour-reviews.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./tour-reviews.scss",
})
export class TourReviews {
  readonly review = input<tourReview[]>();
}
