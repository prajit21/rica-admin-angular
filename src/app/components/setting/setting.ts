import { Component } from "@angular/core";

import { ChangeEmail } from "./change-email/change-email";
import { ChangePassword } from "./change-password/change-password";
import { UserPersonalDetails } from "./user-personal-details/user-personal-details";

@Component({
  selector: "app-setting",
  templateUrl: "./setting.html",
  styleUrl: "./setting.scss",
  imports: [UserPersonalDetails, ChangeEmail, ChangePassword],
})
export class Setting {}
