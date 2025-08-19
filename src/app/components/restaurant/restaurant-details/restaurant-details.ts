import { Component, inject } from "@angular/core";

import { RestaurantGallery } from "./restaurant-gallery/restaurant-gallery";
import { RestaurantLocation } from "./restaurant-location/restaurant-location";
import { RestaurantOrder } from "./restaurant-order/restaurant-order";
import { RestaurantOverview } from "./restaurant-overview/restaurant-overview";
import { RestaurantReview } from "./restaurant-review/restaurant-review";
import { RestaurantTabs } from "./restaurant-tabs/restaurant-tabs";
import { restaurant } from "../../../shared/interface/restaurant";
import { RestaurantService } from "../../../shared/services/restaurant.service";

@Component({
  selector: "app-restaurant-details",
  templateUrl: "./restaurant-details.html",
  styleUrl: "./restaurant-details.scss",
  imports: [
    RestaurantTabs,
    RestaurantOrder,
    RestaurantOverview,
    RestaurantGallery,
    RestaurantLocation,
    RestaurantReview,
  ],
})
export class RestaurantDetails {
  private restaurantService = inject(RestaurantService);

  public activeTab = "order";

  public restaurantDetails: restaurant;

  constructor() {
    this.restaurantService.restaurant().subscribe((response) => {
      this.restaurantDetails = response;
    });
  }

  getTabValue(value: string) {
    this.activeTab = value;
  }
}
