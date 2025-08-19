import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { FeatherIcons } from "../../../shared/components/ui/feather-icons/feather-icons";
import { Pagination } from "../../../shared/components/ui/pagination/pagination";
import { menuItem } from "../../../shared/interface/restaurant";
import { RestaurantService } from "../../../shared/services/restaurant.service";

@Component({
  selector: "app-restaurant-menu-item",
  templateUrl: "./restaurant-menu-item.html",
  styleUrl: "./restaurant-menu-item.scss",
  imports: [RouterLink, FeatherIcons, Pagination],
})
export class RestaurantMenuItem {
  private restaurantService = inject(RestaurantService);

  public menuItem: menuItem[];

  constructor() {
    this.restaurantService.restaurant().subscribe((response) => {
      this.menuItem = response.menuItem;
    });
  }
}
