import { isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject, input } from "@angular/core";

import feather from "feather-icons";

@Component({
  selector: "app-feather-icons",
  templateUrl: "./feather-icons.html",
  styleUrl: "./feather-icons.scss",
})
export class FeatherIcons {
  private platformId = inject(PLATFORM_ID);

  public readonly icon = input<string>();
  public readonly class = input<string>();

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Code that uses feather.replace()
      setTimeout(() => {
        feather.replace();
      });
    }
  }
}
