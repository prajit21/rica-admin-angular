import { Routes } from "@angular/router";

import { TourAddPackage } from "./tour-add-package/tour-add-package";
import { TourAddPackageCategory } from "./tour-add-package-category/tour-add-package-category";
import { TourPackage } from "./tour-package/tour-package";
import { TourPackageCategories } from "./tour-package-categories/tour-package-categories";
import { TourPackageDetails } from "./tour-package-details/tour-package-details";

export default [
  {
    path: "all-package",
    component: TourPackage,
  },
  {
    path: "package-detail",
    component: TourPackageDetails,
  },
  {
    path: "add-new-package",
    component: TourAddPackage,
  },
  {
    path: "all-package-categories",
    component: TourPackageCategories,
  },
  {
    path: "add-package-category",
    component: TourAddPackageCategory,
  },
] as Routes;
