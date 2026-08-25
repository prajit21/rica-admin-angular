import { NgClass } from "@angular/common";
import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { restaurantOverview } from "../../../../shared/interface/restaurant";

@Component({
  selector: "app-restaurant-overview",
  templateUrl: "./restaurant-overview.html",
  styleUrl: "./restaurant-overview.scss",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgClass],
})
export class RestaurantOverview {
  readonly restaurantOverview = input<restaurantOverview[]>();
}
