import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatePincodeComponent } from './component/activate-pincode/activate-pincode.component';
import { CreatePinCodeSerialComponent } from './component/create-pincode-serial/create-pincode-serial.component';
import { CustomPincodeComponent } from './component/custom-pincode/custom-pincode.component';
import { GetPincodeListComponent } from './component/get-pincode-list/get-pincode-list.component';
import { UpdatePincodeComponent } from './component/get-pincode-list/update-pincode/update-pincode.component';
import { PincodeDetailComponent } from './component/pincode-detail/pincode-detail.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "/create-pincode-serial", pathMatch: "full" },
      { path: "create-pincode-serial", component: CreatePinCodeSerialComponent },
      { path: "activate-pincode", component: ActivatePincodeComponent },
      { path: "get-pincode-list", component: GetPincodeListComponent },
      { path: "get-pincode-list/:id", component: UpdatePincodeComponent},
      { path: "pincode-detail", component: PincodeDetailComponent},
      { path: "custom-pincode", component: CustomPincodeComponent},
      
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
