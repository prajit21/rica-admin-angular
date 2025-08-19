import { Component } from "@angular/core";

import { NgbInputDatepicker } from "@ng-bootstrap/ng-bootstrap";

import { FeatherIcons } from "../../../shared/components/ui/feather-icons/feather-icons";

@Component({
  selector: "app-user-personal-details",
  templateUrl: "./user-personal-details.html",
  styleUrl: "./user-personal-details.scss",
  imports: [FeatherIcons, NgbInputDatepicker],
})
export class UserPersonalDetails {}
