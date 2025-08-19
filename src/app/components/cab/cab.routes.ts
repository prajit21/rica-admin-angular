import { Routes } from "@angular/router";

import { AddDriver } from "./add-driver/add-driver";
import { AddNewCar } from "./add-new-car/add-new-car";
import { AllCars } from "./all-cars/all-cars";
import { AllDriver } from "./all-driver/all-driver";
import { CarDetail } from "./car-detail/car-detail";

export default [
  {
    path: "all-car",
    component: AllCars,
  },
  {
    path: "car-detail",
    component: CarDetail,
  },
  {
    path: "add-new-car",
    component: AddNewCar,
  },
  {
    path: "all-driver",
    component: AllDriver,
  },
  {
    path: "add-driver",
    component: AddDriver,
  },
] as Routes;
