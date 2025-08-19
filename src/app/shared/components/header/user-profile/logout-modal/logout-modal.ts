import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-logout-modal",
  templateUrl: "./logout-modal.html",
  styleUrl: "./logout-modal.scss",
})
export class LogoutModal {
  private modal = inject(NgbActiveModal);
  private router = inject(Router);

  closeModal() {
    this.modal.close();
  }

  logout() {
    localStorage.clear();
    this.modal.close();
    setTimeout(() => {
      this.router.navigate(["/auth/login"]);
    }, 300);
  }
}
