import { Component, input } from "@angular/core";

import { FeatherIcons } from "../../../shared/components/ui/feather-icons/feather-icons";
import { dashboardCommonData } from "../../../shared/interface/dashboard";

@Component({
  selector: "app-top-common-data",
  templateUrl: "./top-common-data.html",
  styleUrl: "./top-common-data.scss",
  imports: [FeatherIcons],
})
export class TopCommonData {
  readonly data = input<dashboardCommonData>();
}
