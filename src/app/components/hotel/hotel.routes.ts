import { Routes } from "@angular/router";

import { AddNewHotel } from "./add-new-hotel/add-new-hotel";
import { AllHotel } from "./all-hotel/all-hotel";
import { HotelDetails } from "./hotel-details/hotel-details";

export default [
  {
    path: "all-hotels",
    component: AllHotel,
  },
  {
    path: "hotel-detail",
    component: HotelDetails,
  },
  {
    path: "add-new-hotel",
    component: AddNewHotel,
  },
] as Routes;
