import { Component } from "@angular/core";

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from "@ng-bootstrap/ng-bootstrap";
import { NgApexchartsModule } from "ng-apexcharts";

import { dashboardVisitorChart } from "../../../shared/data/chart/dashboard-chart";

@Component({
  selector: "app-dashboard-visitor-chart",
  templateUrl: "./dashboard-visitor-chart.html",
  styleUrl: "./dashboard-visitor-chart.scss",
  imports: [
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgApexchartsModule,
  ],
})
export class DashboardVisitorChart {
  public dashboardVisitorChart = dashboardVisitorChart;
}
