import { Component, inject, input } from "@angular/core";

import { NgbRatingConfig, NgbRating } from "@ng-bootstrap/ng-bootstrap";

import { tourReview } from "../../../../shared/interface/tours";

@Component({
  selector: "app-restaurant-review",
  templateUrl: "./restaurant-review.html",
  styleUrl: "./restaurant-review.scss",
  imports: [NgbRating],
})
export class RestaurantReview {
  private config = inject(NgbRatingConfig);

  readonly restaurantReview = input<tourReview[]>();

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
