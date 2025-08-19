import { Routes } from "@angular/router";

import { AddNewRestaurant } from "./add-new-restaurant/add-new-restaurant";
import { AllRestaurant } from "./all-restaurant/all-restaurant";
import { RestaurantAddMenuItem } from "./restaurant-add-menu-item/restaurant-add-menu-item";
import { RestaurantDetails } from "./restaurant-details/restaurant-details";
import { RestaurantMenuItem } from "./restaurant-menu-item/restaurant-menu-item";

export default [
  {
    path: "all-restaurant",
    component: AllRestaurant,
  },
  {
    path: "restaurant-detail",
    component: RestaurantDetails,
  },
  {
    path: "add-new-restaurant",
    component: AddNewRestaurant,
  },
  {
    path: "menu-item",
    component: RestaurantMenuItem,
  },
  {
    path: "add-menu-item",
    component: RestaurantAddMenuItem,
  },
] as Routes;
