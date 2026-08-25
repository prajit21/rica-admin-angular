import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Loader } from "./shared/components/ui/loader/loader";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Loader],
  templateUrl: "./app.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./app.scss",
})
export class App {
  title = "admin";
}
