import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminsComponent } from './components/AdminComponents/admins/admins.component';
import { AuthComponent } from './components/AuthComponents/auth/auth.component';
import { BranchsComponent } from './components/BranchComponents/branchs/branchs.component';
import { BrandsComponent } from './components/BrandComponents/brands/brands.component';
import { CarsComponent } from './components/CarComponents/cars/cars.component';
import { CardsComponent } from './components/CardComponents/cards/cards.component';
import { CarImagesComponent } from './components/CarImageComponents/car-images/car-images.component';
import { CaseTypesComponent } from './components/CaseTypeComponents/case-types/case-types.component';
import { CitiesComponent } from './components/CityComponents/cities/cities.component';
import { ClassesComponent } from './components/ClassComponents/classes/classes.component';
import { ColorsComponent } from './components/ColorComponents/colors/colors.component';
import { CustomersComponent } from './components/CustomerComponents/customers/customers.component';
import { DrivingInformationsComponent } from './components/DrivingInformationComponents/driving-informations/driving-informations.component';
import { EmployeesComponent } from './components/EmployeeComponents/employees/employees.component';
import { FuelsComponent } from './components/FuelComponents/fuels/fuels.component';
import { GearsComponent } from './components/GearComponents/gears/gears.component';
import { IdentityInformationUpdateComponent } from './components/IdentityInformationComponents/identity-information-update/identity-information-update.component';
import { IdentityInformationsComponent } from './components/IdentityInformationComponents/identity-informations/identity-informations.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModelsComponent } from './components/ModelComponents/models/models.component';
import { NaviComponent } from './components/navi/navi.component';
import { OperationClaimsComponent } from './components/OperationClaimComponents/operation-claims/operation-claims.component';
import { PhoneNumbersComponent } from './components/PhoneNumberComponents/phone-numbers/phone-numbers.component';
import { RentalDetailsComponent } from './components/RentalDetailComponents/rental-details/rental-details.component';
import { UsersComponent } from './components/UserComponents/users/users.component';
import { UserOperationClaimsComponent } from './components/UserOperationClaimComponents/user-operation-claims/user-operation-claims.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    NaviComponent,
    ColorsComponent,
    AdminsComponent,
    AuthComponent,
    BranchsComponent,
    CarsComponent,
    CardsComponent,
    CarImagesComponent,
    CaseTypesComponent,
    CitiesComponent,
    ClassesComponent,
    CustomersComponent,
    DrivingInformationsComponent,
    EmployeesComponent,
    FuelsComponent,
    GearsComponent,
    IdentityInformationsComponent,
    ModelsComponent,
    OperationClaimsComponent,
    PhoneNumbersComponent,
    RentalDetailsComponent,
    UsersComponent,
    UserOperationClaimsComponent,
    MenuComponent,
    UserOperationClaimsComponent,
    UsersComponent,
    RentalDetailsComponent,
    PhoneNumbersComponent,
    OperationClaimsComponent,
    ModelsComponent,
    IdentityInformationUpdateComponent,
    IdentityInformationsComponent,
    GearsComponent,
    FuelsComponent,
    EmployeesComponent,
    DrivingInformationsComponent,
    CustomersComponent,
    ColorsComponent,
    ClassesComponent,
    CitiesComponent,
    CaseTypesComponent,
    CarImagesComponent,
    CardsComponent,
    CarsComponent,
    BrandsComponent,
    BranchsComponent,
    AdminsComponent,
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
