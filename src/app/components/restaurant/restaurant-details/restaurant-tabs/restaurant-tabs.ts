import { Component, output, ChangeDetectionStrategy } from "@angular/core";

import { restaurantTab } from "../../../../shared/data/data/restaurant";

@Component({
  selector: "app-restaurant-tabs",
  templateUrl: "./restaurant-tabs.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./restaurant-tabs.scss",
})
export class RestaurantTabs {
  readonly tabValue = output<string>();

  public restaurantTab = restaurantTab;

  public activeTab = "order";

  changeTab(value: string) {
    this.activeTab = value;
    this.tabValue.emit(this.activeTab);
  }
}
