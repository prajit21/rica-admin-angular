import { Component, ChangeDetectionStrategy } from "@angular/core";

import { headerMessageBox } from "../../../data/data/header";
import { FeatherIcons } from "../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-message-box",
  templateUrl: "./message-box.html",
  styleUrl: "./message-box.scss",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FeatherIcons],
})
export class MessageBox {
  public headerMessageBox = headerMessageBox;

  public isActive: boolean = false;

  toggle() {
    this.isActive = !this.isActive;
  }
}
