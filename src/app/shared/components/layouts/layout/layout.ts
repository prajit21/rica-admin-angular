import { Component, HostListener, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { NavService } from "../../../services/nav.service";
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";
import { Menu } from "../../menu/menu";
import { Customizer } from "../../ui/customizer/customizer";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.html",
  styleUrl: "./layout.scss",
  imports: [Header, Menu, RouterOutlet, Footer, Customizer],
})
export class Layout {
  public navService = inject(NavService);

  public width: number;

  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    this.width = (event.target as Window).innerWidth;
    if (this.width < 992) {
      this.navService.closeSidebar = true;
    } else {
      this.navService.closeSidebar = false;
    }
  }

  constructor() {
    if (window.innerWidth < 992) {
      this.navService.closeSidebar = true;
    }
  }
}
