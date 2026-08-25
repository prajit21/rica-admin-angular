import {
  Component,
  inject,
  input,
  ChangeDetectionStrategy,
} from "@angular/core";

import { NgbRatingConfig, NgbRating } from "@ng-bootstrap/ng-bootstrap";

import { hotelReview } from "../../../../shared/interface/hotel";

@Component({
  selector: "app-hotel-review",
  templateUrl: "./hotel-review.html",
  styleUrl: "./hotel-review.scss",
  changeDetection: ChangeDetectionStrategy.Eager,
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
