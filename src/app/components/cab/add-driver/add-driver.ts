import { Component } from "@angular/core";

import { NgbInputDatepicker } from "@ng-bootstrap/ng-bootstrap";
import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-add-driver",
  templateUrl: "./add-driver.html",
  styleUrl: "./add-driver.scss",
  imports: [NgbInputDatepicker, DropzoneModule],
})
export class AddDriver {
  public config: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: "https://httpbin.org/post",
    maxFilesize: 50,
    addRemoveLinks: true,
    acceptedFiles: "image/*",
  };

  public text =
    '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span class="note needsclick">(This is just ademo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}
