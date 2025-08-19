import { Component } from "@angular/core";

import { headerNotification } from "../../../data/data/header";
import { FeatherIcons } from "../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.html",
  styleUrl: "./notification.scss",
  imports: [FeatherIcons],
})
export class Notification {
  public headerNotification = headerNotification;

  public isActive: boolean = false;

  toggle() {
    this.isActive = !this.isActive;
  }
}
