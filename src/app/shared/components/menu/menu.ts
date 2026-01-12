import { NgClass, NgTemplateOutlet } from "@angular/common";
import { Component, HostListener, inject } from "@angular/core";
import { NavigationEnd, Router, RouterLinkActive, RouterLink } from "@angular/router";

import { IMenu, NavService } from "../../services/nav.service";
import { FeatherIcons } from "../ui/feather-icons/feather-icons";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.html",
  styleUrl: "./menu.scss",
  imports: [FeatherIcons, NgTemplateOutlet, RouterLinkActive, RouterLink, NgClass],
})
export class Menu {
  private navService = inject(NavService);
  private router = inject(Router);

  public menus = this.navService.menuItem;
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
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menus.filter((items) => {
          if (items.path === event.url) {
            this.setNavActive(items);
          }
          items.children?.filter((subItems) => {
            if (subItems.path === event.url) {
              this.setNavActive(subItems);
            }
          });
        });
      }
    });
  }

  // Active Nave state
  setNavActive(item: IMenu) {
    this.menus.filter((menuItem) => {
      if (menuItem !== item) {
        menuItem.active = false;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter((submenuItems) => {
          if (submenuItems === item) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }

  toggleSidebar() {
    this.navService.closeSidebar = true;
  }

  toggleMenu(item: IMenu) {
    if (!item.active) {
      this.menus.forEach((child) => {
        if (this.menus.includes(item)) {
          child.active = false;
        }

        if (child.children) {
          child.children.forEach((subChild) => {
            if (child.children?.includes(item)) {
              subChild.active = false;
            }
          });
          return;
        }
      });
    }
    item.active = !item.active;
  }
}
