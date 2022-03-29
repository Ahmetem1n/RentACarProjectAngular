import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/AdminComponents/admins/admin.component';
import { AuthComponent } from './components/AuthComponents/auth/auth.component';
import { BranchComponent } from './components/BranchComponents/branch/branch.component';
import { BrandComponent } from './components/BrandComponents/brand/brand.component';
import { CarComponent } from './components/CarComponents/car/car.component';
import { CardComponent } from './components/CardComponents/card/card.component';
import { CarImageComponent } from './components/CarImageComponents/car-image/car-image.component';
import { CaseTypeComponent } from './components/CaseTypeComponents/case-type/case-type.component';
import { CityComponent } from './components/CityComponents/city/city.component';
import { ClassComponent } from './components/ClassComponents/class/class.component';
import { ColorComponent } from './components/ColorComponents/color/color.component';
import { CustomerComponent } from './components/CustomerComponents/customer/customer.component';
import { DrivingInformationComponent } from './components/DrivingInformationComponents/driving-information/driving-information.component';
import { EmployeeComponent } from './components/EmployeeComponents/employee/employee.component';
import { FuelComponent } from './components/FuelComponents/fuel/fuel.component';
import { GearComponent } from './components/GearComponents/gear/gear.component';
import { IdentityInformationComponent } from './components/IdentityInformationComponents/identity-information/identity-information.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModelComponent } from './components/ModelComponents/model/model.component';
import { NaviComponent } from './components/navi/navi.component';
import { OperationClaimComponent } from './components/OperationClaimComponents/operation-claim/operation-claim.component';
import { PhoneNumberComponent } from './components/PhoneNumberComponents/phone-number/phone-number.component';
import { RentalDetailComponent } from './components/RentalDetailComponents/rental-detail/rental-detail.component';
import { UserComponent } from './components/UserComponents/user/user.component';
import { UserOperationClaimComponent } from './components/UserOperationClaimComponents/user-operation-claim/user-operation-claim.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    AdminComponent,
    AuthComponent,
    BranchComponent,
    CarComponent,
    CardComponent,
    CarImageComponent,
    CaseTypeComponent,
    CityComponent,
    ClassComponent,
    CustomerComponent,
    DrivingInformationComponent,
    EmployeeComponent,
    FuelComponent,
    GearComponent,
    IdentityInformationComponent,
    ModelComponent,
    OperationClaimComponent,
    PhoneNumberComponent,
    RentalDetailComponent,
    UserComponent,
    UserOperationClaimComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
