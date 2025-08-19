import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { dashboardTrafficChart } from "../../../shared/data/chart/dashboard-chart";

@Component({
  selector: "app-dashboard-traffic-chart",
  templateUrl: "./dashboard-traffic-chart.html",
  styleUrl: "./dashboard-traffic-chart.scss",
  imports: [NgApexchartsModule],
})
export class DashboardTrafficChart {
  public trafficChart = dashboardTrafficChart;
}
