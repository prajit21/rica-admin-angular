import { Component, inject, input } from "@angular/core";

import { NgbRatingConfig, NgbRating } from "@ng-bootstrap/ng-bootstrap";

import { hotelReview } from "../../../../shared/interface/hotel";

@Component({
  selector: "app-hotel-review",
  templateUrl: "./hotel-review.html",
  styleUrl: "./hotel-review.scss",
  imports: [NgbRating],
})
export class HotelReview {
  private config = inject(NgbRatingConfig);

  readonly hotelReview = input<hotelReview[]>();

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
