import { NgClass, DecimalPipe } from "@angular/common";
import { Component, input } from "@angular/core";

import { restaurantOrders } from "../../../../shared/interface/restaurant";

@Component({
  selector: "app-restaurant-order-menu-item",
  templateUrl: "./restaurant-order-menu-item.html",
  styleUrl: "./restaurant-order-menu-item.scss",
  imports: [NgClass, DecimalPipe],
})
export class RestaurantOrderMenuItem {
  readonly restaurantOrders = input<restaurantOrders[]>();
}
