import { NgModule } from "@angular/core";
import { PhotoFormComponent } from "./photo-form.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [CommonModule, ReactiveFormsModule, VMessageModule, FormsModule],
})
export class PhotoFormModule {}
