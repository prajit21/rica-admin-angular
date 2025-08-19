import { Component, output } from "@angular/core";

import { hotelTabs } from "../../../../shared/data/data/hotel";

@Component({
  selector: "app-hotel-tab",
  templateUrl: "./hotel-tab.html",
  styleUrl: "./hotel-tab.scss",
})
export class HotelTab {
  readonly tabValue = output<string>();

  public hotelTabs = hotelTabs;
  public activeTab = "rooms";

  changeTab(value: string) {
    this.activeTab = value;

    this.tabValue.emit(this.activeTab);
  }
}
