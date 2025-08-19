import { Component } from "@angular/core";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.html",
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
