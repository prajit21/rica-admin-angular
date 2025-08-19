import { Component, output } from "@angular/core";

import { tourTab } from "../../../../shared/data/data/tour";

@Component({
  selector: "app-tour-tab",
  templateUrl: "./tour-tab.html",
  styleUrl: "./tour-tab.scss",
})
export class TourTab {
  readonly tabValue = output<string>();

  public tourTab = tourTab;
  public activeTab = "highlight";

  getTabValue(value: string) {
    this.activeTab = value;

    this.tabValue.emit(this.activeTab);
  }
}
