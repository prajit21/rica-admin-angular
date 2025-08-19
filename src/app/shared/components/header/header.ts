import { SlicePipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

import { FullScreen } from "./full-screen/full-screen";
import { MessageBox } from "./message-box/message-box";
import { Notification } from "./notification/notification";
import { ThemeMode } from "./theme-mode/theme-mode";
import { UserProfile } from "./user-profile/user-profile";
import { ClickOutsideDirective } from "../../directive/click-outside.directive";
import { IMenu, NavService } from "../../services/nav.service";
import { FeatherIcons } from "../ui/feather-icons/feather-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
  imports: [
    FeatherIcons,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    Notification,
    ThemeMode,
    ClickOutsideDirective,
    MessageBox,
    FullScreen,
    UserProfile,
    SlicePipe,
  ],
})
export class Header {
  public navService = inject(NavService);

  public isSearch: boolean = false;
  public menuItems: IMenu[] = [];
  public items: IMenu[] = [];
  public isOpen: boolean = false;
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string = "";

  constructor() {
    const navService = this.navService;
    this.items = navService.menuItem;
  }

  searchTerm(term: string) {
    term ? this.addFix() : this.removeFix();
    if (!term) return (this.menuItems = []);
    let items: IMenu[] = [];
    term = term.toLowerCase();
    this.items.filter((menuItems) => {
      if (!menuItems?.title) return false;
      if (
        menuItems.title.toLowerCase().includes(term) &&
        menuItems.type === "link"
      ) {
        items.push(menuItems);
      }
      if (!menuItems.children) return false;
      menuItems.children.filter((subItems) => {
        if (
          subItems.title?.toLowerCase().includes(term) &&
          subItems.type === "link"
        ) {
          subItems.icon = menuItems.icon;
          items.push(subItems);
        }
        if (!subItems.children) return false;
        subItems.children.filter((suSubItems) => {
          if (suSubItems.title?.toLowerCase().includes(term)) {
            suSubItems.icon = menuItems.icon;
            items.push(suSubItems);
          }
        });
        return;
      });
      this.checkSearchResultEmpty(items);
      this.menuItems = items;
      return;
    });
    return;
  }

  checkSearchResultEmpty(items: IMenu[]) {
    if (!items.length) this.searchResultEmpty = true;
    else this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
  }

  removeFix() {
    this.searchResult = false;
    this.text = "";
  }

  clickOutside(): void {
    this.searchResult = false;
    this.searchResultEmpty = false;
    this.text = "";
  }

  toggleSidebar() {
    this.navService.closeSidebar = !this.navService.closeSidebar;
  }

  openSearch() {
    this.isSearch = true;
  }

  closeSearch() {
    this.isSearch = false;
  }
}
