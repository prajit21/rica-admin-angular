import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { tourAccommodation } from "../../../../shared/interface/tours";

@Component({
  selector: "app-tour-accommodation",
  templateUrl: "./tour-accommodation.html",
  styleUrl: "./tour-accommodation.scss",
  imports: [RouterLink],
})
export class TourAccommodation {
  readonly accommodations = input<tourAccommodation[]>();
}
