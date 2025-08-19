import { Component } from "@angular/core";

import { NgbDatepicker } from "@ng-bootstrap/ng-bootstrap";

import { DashboardBookingHistory } from "./dashboard-booking-history/dashboard-booking-history";
import { DashboardEarningChart } from "./dashboard-earning-chart/dashboard-earning-chart";
import { DashboardTours } from "./dashboard-tours/dashboard-tours";
import { DashboardTrafficChart } from "./dashboard-traffic-chart/dashboard-traffic-chart";
import { DashboardVisitorChart } from "./dashboard-visitor-chart/dashboard-visitor-chart";
import { DashboardWorldMap } from "./dashboard-world-map/dashboard-world-map";
import { TopCommonData } from "./top-common-data/top-common-data";
import * as data from "../../shared/data/data/dashboard";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.html",
  styleUrl: "./dashboard.scss",
  imports: [
    TopCommonData,
    DashboardVisitorChart,
    DashboardEarningChart,
    DashboardBookingHistory,
    NgbDatepicker,
    DashboardTrafficChart,
    DashboardWorldMap,
    DashboardTours,
  ],
})
export class Dashboard {
  public topCommonData = data.topCommonData;
}
