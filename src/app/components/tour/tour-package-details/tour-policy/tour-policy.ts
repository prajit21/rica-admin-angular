import { Component, input } from "@angular/core";

import { tourPolicy } from "../../../../shared/interface/tours";

@Component({
  selector: "app-tour-policy",
  templateUrl: "./tour-policy.html",
  styleUrl: "./tour-policy.scss",
})
export class TourPolicy {
  readonly policy = input<tourPolicy[]>();
}
