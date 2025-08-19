import { Component, input } from "@angular/core";

import { tourHighlight } from "../../../../shared/interface/tours";

@Component({
  selector: "app-tour-highlight",
  templateUrl: "./tour-highlight.html",
  styleUrl: "./tour-highlight.scss",
})
export class TourHighlight {
  readonly highlights = input<tourHighlight[]>();
}
