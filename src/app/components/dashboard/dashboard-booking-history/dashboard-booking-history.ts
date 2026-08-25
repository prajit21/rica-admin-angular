import { Component, ChangeDetectionStrategy } from "@angular/core";

import { dashboardBookingHistory } from "../../../shared/data/data/dashboard";

@Component({
  selector: "app-dashboard-booking-history",
  templateUrl: "./dashboard-booking-history.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./dashboard-booking-history.scss",
})
export class DashboardBookingHistory {
  public dashboardBookingHistory = dashboardBookingHistory;
}
