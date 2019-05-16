import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule } from "@angular/material";

/* this is file for managing all Angular Material imported and exported that your app need*/
// decorator NgModule tell angular that this class is angular module
@NgModule({
  imports: [MatButtonModule, MatIconModule],
  exports: [MatButtonModule, MatIconModule]
})
export class MaterialModule {}
