import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { tourPolicy } from "../../../../shared/interface/tours";

@Component({
  selector: "app-tour-policy",
  templateUrl: "./tour-policy.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./tour-policy.scss",
})
export class TourPolicy {
  readonly policy = input<tourPolicy[]>();
}
