import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { FeatherIcons } from "../../../shared/components/ui/feather-icons/feather-icons";
import { Pagination } from "../../../shared/components/ui/pagination/pagination";
import { restaurants } from "../../../shared/interface/restaurant";
import { RestaurantService } from "../../../shared/services/restaurant.service";

@Component({
  selector: "app-all-restaurant",
  templateUrl: "./all-restaurant.html",
  styleUrl: "./all-restaurant.scss",
  imports: [RouterLink, FeatherIcons, Pagination],
})
export class AllRestaurant {
  private restaurantService = inject(RestaurantService);

  public restaurant: restaurants[];

  constructor() {
    this.restaurantService.restaurant().subscribe((response) => {
      this.restaurant = response.restaurant;
    });
  }
}
