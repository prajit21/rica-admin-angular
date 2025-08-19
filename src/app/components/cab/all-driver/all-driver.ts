import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { FeatherIcons } from "../../../shared/components/ui/feather-icons/feather-icons";
import { Pagination } from "../../../shared/components/ui/pagination/pagination";
import { cabDrivers } from "../../../shared/interface/cab";
import { CabService } from "../../../shared/services/cab.service";

@Component({
  selector: "app-all-driver",
  templateUrl: "./all-driver.html",
  styleUrl: "./all-driver.scss",
  imports: [RouterLink, FeatherIcons, Pagination],
})
export class AllDriver {
  private cabService = inject(CabService);

  public drivers: cabDrivers[];

  constructor() {
    this.cabService.cab().subscribe((response) => {
      this.drivers = response.cabDrivers;
    });
  }
}
