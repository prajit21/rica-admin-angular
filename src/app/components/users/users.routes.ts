import { Routes } from "@angular/router";

import { AddNewUser } from "./add-new-user/add-new-user";
import { AllUsers } from "./all-users/all-users";

export default [
  {
    path: "all-user",
    component: AllUsers,
  },
  {
    path: "add-new-user",
    component: AddNewUser,
  },
] as Routes;
