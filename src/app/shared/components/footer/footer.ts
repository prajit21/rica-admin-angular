import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./footer.scss",
})
export class Footer {
  public year = new Date().getFullYear();
}
