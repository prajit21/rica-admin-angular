import { Component, DOCUMENT, inject } from "@angular/core";

import { FeatherIcons } from "../../ui/feather-icons/feather-icons";

@Component({
  selector: "app-full-screen",
  templateUrl: "./full-screen.html",
  styleUrl: "./full-screen.scss",
  imports: [FeatherIcons],
})
export class FullScreen {
  private document = inject(DOCUMENT);

  public elem: HTMLElement;
  public fullScreen: boolean;

  ngOnInit(): void {
    this.elem = document.documentElement;
  }
  toggleFullScreen() {
    this.fullScreen = !this.fullScreen;
    if (this.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if ("mozRequestFullScreen" in this.elem) {
        (
          this.elem as HTMLElement & {
            mozRequestFullScreen: () => Promise<void>;
          }
        ).mozRequestFullScreen();
      } else if ("webkitRequestFullscreen" in this.elem) {
        (
          this.elem as HTMLElement & {
            webkitRequestFullscreen: () => Promise<void>;
          }
        ).webkitRequestFullscreen();
      } else if ("msRequestFullscreen" in this.elem) {
        (
          this.elem as HTMLElement & {
            msRequestFullscreen: () => Promise<void>;
          }
        ).msRequestFullscreen();
      }
    } else {
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if ("mozCancelFullScreen" in this.document) {
        (
          this.document as Document & {
            mozCancelFullScreen: () => Promise<void>;
          }
        ).mozCancelFullScreen();
      } else if ("webkitExitFullscreen" in this.document) {
        (
          this.document as Document & {
            webkitExitFullscreen: () => Promise<void>;
          }
        ).webkitExitFullscreen();
      } else if ("msExitFullscreen" in this.document) {
        (
          this.document as Document & { msExitFullscreen: () => Promise<void> }
        ).msExitFullscreen();
      }
    }
  }
}
