import { Component } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";

@Component({
  selector: "app-dashboard-world-map",
  templateUrl: "./dashboard-world-map.html",
  styleUrl: "./dashboard-world-map.scss",
  imports: [GoogleMapsModule],
})
export class DashboardWorldMap {
  public mapOptions: google.maps.MapOptions = {
    center: { lat: 0, lng: 0 },
    zoom: 1,
  };
}
