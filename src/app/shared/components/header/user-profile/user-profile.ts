import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { LogoutModal } from "./logout-modal/logout-modal";
import { FeatherIcons } from "../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.html",
  styleUrl: "./user-profile.scss",
  imports: [FeatherIcons],
})
export class UserProfile {
  private modal = inject(NgbModal);

  public isActive: boolean = false;

  toggle() {
    this.isActive = !this.isActive;
  }

  logout() {
    this.modal.open(LogoutModal, { centered: true });
  }
}
