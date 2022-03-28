import { NaviComponent } from './components/navi/navi.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { BranchComponent } from './components/branch/branch.component';
import { CarComponent } from './components/car/car.component';
import { CardComponent } from './components/card/card.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CaseTypeComponent } from './components/case-type/case-type.component';
import { CityComponent } from './components/city/city.component';
import { ClassComponent } from './components/class/class.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DrivingInformationComponent } from './components/driving-information/driving-information.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FuelComponent } from './components/fuel/fuel.component';
import { GearComponent } from './components/gear/gear.component';
import { IdentityInformationComponent } from './components/identity-information/identity-information.component';
import { ModelComponent } from './components/model/model.component';
import { OperationClaimComponent } from './components/operation-claim/operation-claim.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { UserComponent } from './components/user/user.component';
import { UserOperationClaimComponent } from './components/user-operation-claim/user-operation-claim.component';

@NgModule({
  declarations: [AppComponent, BrandComponent, NaviComponent, ColorComponent, AdminComponent, AuthComponent, BranchComponent, CarComponent, CardComponent, CarImageComponent, CaseTypeComponent, CityComponent, ClassComponent, CustomerComponent, DrivingInformationComponent, EmployeeComponent, FuelComponent, GearComponent, IdentityInformationComponent, ModelComponent, OperationClaimComponent, PhoneNumberComponent, RentalDetailComponent, UserComponent, UserOperationClaimComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
