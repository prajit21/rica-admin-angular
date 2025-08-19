import { Component, inject } from "@angular/core";

import { NgbRatingConfig, NgbRating } from "@ng-bootstrap/ng-bootstrap";

import { Pagination } from "../../shared/components/ui/pagination/pagination";
import { reviewDetails } from "../../shared/interface/review";
import { ReviewService } from "../../shared/services/review.service";

@Component({
  selector: "app-review",
  templateUrl: "./review.html",
  styleUrl: "./review.scss",
  imports: [NgbRating, Pagination],
})
export class Review {
  private reviewService = inject(ReviewService);
  private config = inject(NgbRatingConfig);

  public review: reviewDetails[];

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;

    this.reviewService.review().subscribe((response) => {
      this.review = response.review;
    });
  }
}
