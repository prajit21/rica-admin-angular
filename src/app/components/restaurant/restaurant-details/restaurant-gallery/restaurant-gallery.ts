import { Component, inject, input } from "@angular/core";

import {
  Gallery,
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from "ng-gallery";
import { Lightbox, LightboxModule } from "ng-gallery/lightbox";

import { gallery } from "../../../../shared/interface/restaurant";

@Component({
  selector: "app-restaurant-gallery",
  imports: [LightboxModule],
  templateUrl: "./restaurant-gallery.html",
  styleUrl: "./restaurant-gallery.scss",
})
export class RestaurantGallery {
  public gallery = inject(Gallery);
  public lightbox = inject(Lightbox);

  readonly restaurantGallery = input<gallery[]>();

  public images: gallery[];
  public items: GalleryItem[];

  openLightBox() {
    this.images = [];
    this.restaurantGallery()!.forEach((image) => {
      this.images.push(image);
    });

    this.items = this.images.map(
      (item) => new ImageItem({ src: item.image, thumb: item.image }),
    );

    const lightboxRef = this.gallery.ref("lightbox");

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    this.lightbox.open();
    lightboxRef.load(this.items);
  }
}
