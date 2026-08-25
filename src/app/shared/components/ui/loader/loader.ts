import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./loader.scss",
})
export class Loader {
  public isHide: boolean = false;

  constructor() {
    setTimeout(() => {
      this.isHide = true;
    }, 5000);
  }
}
