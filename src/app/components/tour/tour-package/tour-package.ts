import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { FeatherIcons } from "../../../shared/components/ui/feather-icons/feather-icons";
import { Pagination } from "../../../shared/components/ui/pagination/pagination";
import { category } from "../../../shared/interface/tours";
import { ToursService } from "../../../shared/services/tours.service";

@Component({
  selector: "app-tour-package",
  templateUrl: "./tour-package.html",
  styleUrl: "./tour-package.scss",
  imports: [RouterLink, FeatherIcons, Pagination],
})
export class TourPackage {
  private tourService = inject(ToursService);

  public tourCategory: category[];

  constructor() {
    this.tourService.tour().subscribe((response) => {
      this.tourCategory = response.tours;
    });
  }
}
