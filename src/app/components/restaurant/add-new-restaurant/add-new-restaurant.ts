import { Component, inject } from "@angular/core";

import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
} from "@danielmoncada/angular-datetime-picker";
import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

import { addRestaurantDetails } from "../../../shared/interface/restaurant";
import { RestaurantService } from "../../../shared/services/restaurant.service";

@Component({
  selector: "app-add-new-restaurant",
  templateUrl: "./add-new-restaurant.html",
  styleUrl: "./add-new-restaurant.scss",
  imports: [OwlDateTimeModule, OwlNativeDateTimeModule, DropzoneModule],
})
export class AddNewRestaurant {
  private restaurantService = inject(RestaurantService);

  public restaurant: addRestaurantDetails[];

  public config: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: "https://httpbin.org/post",
    maxFilesize: 50,
    addRemoveLinks: true,
    acceptedFiles: "image/*",
  };

  public text =
    '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span class="note needsclick">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';

  constructor() {
    this.restaurantService.restaurant().subscribe((response) => {
      this.restaurant = response.addRestaurantDetails;
    });
  }

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}
