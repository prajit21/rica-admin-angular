import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ChangeEmail } from "./change-email/change-email";
import { ChangePassword } from "./change-password/change-password";
import { UserPersonalDetails } from "./user-personal-details/user-personal-details";

@Component({
  selector: "app-setting",
  templateUrl: "./setting.html",
  styleUrl: "./setting.scss",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [UserPersonalDetails, ChangeEmail, ChangePassword],
})
export class Setting {}
