import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePinCodeSerialComponent } from './component/create-pincode-serial/create-pincode-serial.component';
import { CreatePinCodeComponent } from './component/create-pincode/create-pincode.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "/pincode", pathMatch: "full" },
      { path: "pincode", component: CreatePinCodeComponent },
      { path: "create-pincode-serial", component: CreatePinCodeSerialComponent },

    ]
  },

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
