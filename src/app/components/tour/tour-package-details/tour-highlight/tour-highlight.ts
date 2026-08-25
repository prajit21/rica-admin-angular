import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { tourHighlight } from "../../../../shared/interface/tours";

@Component({
  selector: "app-tour-highlight",
  templateUrl: "./tour-highlight.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./tour-highlight.scss",
})
export class TourHighlight {
  readonly highlights = input<tourHighlight[]>();
}
