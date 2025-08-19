import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { FeatherIcons } from "../../shared/components/ui/feather-icons/feather-icons";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.html",
  styleUrl: "./log-in.scss",
  imports: [RouterLink, FeatherIcons],
})
export class LogIn {
  public type: string = "password";
  public isShow: boolean = true;

  showPassword() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.type = "password";
    } else {
      this.type = "text";
    }
  }
}
