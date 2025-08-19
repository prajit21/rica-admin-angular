import { Component, inject } from "@angular/core";

import { LayoutService } from "../../../services/layout.service";

@Component({
  selector: "app-customizer",
  templateUrl: "./customizer.html",
  styleUrl: "./customizer.scss",
})
export class Customizer {
  public layoutService = inject(LayoutService);

  public btnValue: string;

  constructor() {
    if (this.layoutService.config.settings.layout_type == "rtl") {
      this.btnValue = "LTR";
    } else if (this.layoutService.config.settings.layout_type == "ltr") {
      this.btnValue = "RTL";
    }
  }

  changeLayout(value: string) {
    if (value == "RTL") {
      this.layoutService.config.settings.layout_type = "rtl";
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      document.body.className = "rtl";
      this.btnValue = "LTR";
    } else if (value == "LTR") {
      this.layoutService.config.settings.layout_type = "ltr";
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
      document.body.className = "ltr";
      this.btnValue = "RTL";
    }
  }
}
