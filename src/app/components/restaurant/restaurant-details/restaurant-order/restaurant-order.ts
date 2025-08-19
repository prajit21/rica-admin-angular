import { Component, HostListener, input } from "@angular/core";

import { restaurantOrders } from "../../../../shared/interface/restaurant";
import { RestaurantOrderMenu } from "../restaurant-order-menu/restaurant-order-menu";
import { RestaurantOrderMenuItem } from "../restaurant-order-menu-item/restaurant-order-menu-item";

@Component({
  selector: "app-restaurant-order",
  templateUrl: "./restaurant-order.html",
  styleUrl: "./restaurant-order.scss",
  imports: [RestaurantOrderMenu, RestaurantOrderMenuItem],
})
export class RestaurantOrder {
  readonly restaurantOrders = input<restaurantOrders[]>();

  public isStuck: boolean = false;
  public isNotStuck: boolean = false;

  @HostListener("window: scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 270) {
      this.isStuck = true;
      this.isNotStuck = false;
    } else {
      this.isStuck = false;
    }
    if (number > 3600) {
      this.isNotStuck = true;
      this.isStuck = false;
    }
  }
}
