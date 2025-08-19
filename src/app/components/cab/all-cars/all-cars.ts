import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { FeatherIcons } from "../../../shared/components/ui/feather-icons/feather-icons";
import { Pagination } from "../../../shared/components/ui/pagination/pagination";
import { cabs } from "../../../shared/interface/cab";
import { CabService } from "../../../shared/services/cab.service";

@Component({
  selector: "app-all-cars",
  templateUrl: "./all-cars.html",
  styleUrl: "./all-cars.scss",
  imports: [RouterLink, FeatherIcons, Pagination],
})
export class AllCars {
  private cabService = inject(CabService);

  public cabs: cabs[];

  constructor() {
    this.cabService.cab().subscribe((response) => {
      this.cabs = response.cab;
    });
  }
}
