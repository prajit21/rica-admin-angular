import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { FeatherIcons } from "../../../shared/components/ui/feather-icons/feather-icons";
import { Pagination } from "../../../shared/components/ui/pagination/pagination";
import { user } from "../../../shared/interface/user";
import { UserService } from "../../../shared/services/user.service";

@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.html",
  styleUrl: "./all-users.scss",
  imports: [RouterLink, FeatherIcons, Pagination],
})
export class AllUsers {
  private userService = inject(UserService);

  public users: user[];

  constructor() {
    this.userService.user().subscribe((response) => {
      this.users = response.users;
    });
  }
}
