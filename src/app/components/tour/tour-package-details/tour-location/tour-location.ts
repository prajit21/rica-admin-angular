import { Component, inject, input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { tourLocation } from "../../../../shared/interface/tours";

@Component({
  selector: "app-tour-location",
  templateUrl: "./tour-location.html",
  styleUrl: "./tour-location.scss",
})
export class TourLocation {
  public sanitizer = inject(DomSanitizer);

  readonly location = input<tourLocation>();

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
