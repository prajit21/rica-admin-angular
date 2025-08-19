import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { FeatherIcons } from "../../../shared/components/ui/feather-icons/feather-icons";
import { Pagination } from "../../../shared/components/ui/pagination/pagination";
import { tourPackageDetail } from "../../../shared/interface/tours";
import { ToursService } from "../../../shared/services/tours.service";

@Component({
  selector: "app-tour-package-categories",
  templateUrl: "./tour-package-categories.html",
  styleUrl: "./tour-package-categories.scss",
  imports: [RouterLink, FeatherIcons, Pagination],
})
export class TourPackageCategories {
  private tourService = inject(ToursService);

  public packageDetail: tourPackageDetail[];

  constructor() {
    this.tourService.tour().subscribe((response) => {
      this.packageDetail = response.tourPackageDetail;
    });
  }
}
