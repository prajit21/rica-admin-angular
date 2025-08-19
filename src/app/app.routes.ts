import { Routes } from "@angular/router";

import { AdminGuard } from "./shared/guard/admin.guard";
import { full } from "./shared/routes/full-routes";
import { content } from "./shared/routes/routes";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },
  {
    path: "auth/login",
    loadComponent: () => import("./auth/login/login").then((m) => m.Login),
  },
  {
    path: "",
    loadComponent: () =>
      import("./shared/components/layouts/layout/layout").then((m) => m.Layout),
    canActivate: [AdminGuard],
    children: content,
  },
  {
    path: "",
    loadComponent: () =>
      import("./shared/components/layouts/full/full").then((m) => m.Full),
    canActivate: [AdminGuard],
    children: full,
  },
];
