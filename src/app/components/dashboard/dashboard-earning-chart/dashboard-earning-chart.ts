import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { dashboardEarningChart } from "../../../shared/data/chart/dashboard-chart";

@Component({
  selector: "app-dashboard-earning-chart",
  templateUrl: "./dashboard-earning-chart.html",
  styleUrl: "./dashboard-earning-chart.scss",
  imports: [NgApexchartsModule],
})
export class DashboardEarningChart {
  public dashboardEarningChart = dashboardEarningChart;
}
