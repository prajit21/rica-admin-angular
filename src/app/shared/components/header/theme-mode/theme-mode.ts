import { NgClass } from "@angular/common";
import { Component, inject } from "@angular/core";

import { LayoutService } from "../../../services/layout.service";

@Component({
  selector: "app-theme-mode",
  templateUrl: "./theme-mode.html",
  styleUrl: "./theme-mode.scss",
  imports: [NgClass],
})
export class ThemeMode {
  public layout = inject(LayoutService);

  public dark: boolean =
    this.layout.config.settings.layout_version == "dark-only" ? true : false;

  constructor() {
    if (this.dark) {
      document.body.classList.add("dark-only");
    }
  }

  layoutToggle() {
    this.dark = !this.dark;
    this.dark
      ? document.body.classList.add("dark-only")
      : document.body.classList.remove("dark-only");
    this.layout.config.settings.layout_version = this.dark
      ? "dark-only"
      : "light-only";
  }
}
