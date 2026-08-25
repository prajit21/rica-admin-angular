import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-full",
  templateUrl: "./full.html",
  styleUrl: "./full.scss",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterOutlet],
})
export class Full {}
