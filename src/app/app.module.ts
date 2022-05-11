import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectSearchModule } from 'mat-select-search';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { AdminAddComponent } from './components/AdminPages/AdminComponents/admin-add/admin-add.component';
import { AdminDeleteComponent } from './components/AdminPages/AdminComponents/admin-delete/admin-delete.component';
import { AdminDetailComponent } from './components/AdminPages/AdminComponents/admin-detail/admin-detail.component';
import { AdminUpdateComponent } from './components/AdminPages/AdminComponents/admin-update/admin-update.component';
import { AdminsComponent } from './components/AdminPages/AdminComponents/admins/admins.component';
import { AuthComponent } from './components/AdminPages/AuthComponents/auth/auth.component';
import { BranchsComponent } from './components/AdminPages/BranchComponents/branchs/branchs.component';
import { BrandsComponent } from './components/AdminPages/BrandComponents/brands/brands.component';
import { CarDetailComponent } from './components/AdminPages/CarComponents/car-detail/car-detail.component';
import { CarsComponent } from './components/AdminPages/CarComponents/cars/cars.component';
import { GetByUsableComponent } from './components/AdminPages/CarComponents/get-by-usable/get-by-usable.component';
import { CardDetailComponent } from './components/AdminPages/CardComponents/card-detail/card-detail.component';
import { CardsComponent } from './components/AdminPages/CardComponents/cards/cards.component';
import { CarImageDetailComponent } from './components/AdminPages/CarImageComponents/car-image-detail/car-image-detail.component';
import { CarImagesComponent } from './components/AdminPages/CarImageComponents/car-images/car-images.component';
import { CaseTypesComponent } from './components/AdminPages/CaseTypeComponents/case-types/case-types.component';
import { ClassesComponent } from './components/AdminPages/ClassComponents/classes/classes.component';
import { ColorsComponent } from './components/AdminPages/ColorComponents/colors/colors.component';
import { CustomerDetailComponent } from './components/AdminPages/CustomerComponents/customer-detail/customer-detail.component';
import { CustomersComponent } from './components/AdminPages/CustomerComponents/customers/customers.component';
import { DrivingInformationDetailComponent } from './components/AdminPages/DrivingInformationComponents/driving-information-detail/driving-information-detail.component';
import { DrivingInformationsComponent } from './components/AdminPages/DrivingInformationComponents/driving-informations/driving-informations.component';
import { FuelsComponent } from './components/AdminPages/FuelComponents/fuels/fuels.component';
import { GearsComponent } from './components/AdminPages/GearComponents/gears/gears.component';
import { IdentityInformationDetailComponent } from './components/AdminPages/IdentityInformationComponents/identity-information-detail/identity-information-detail.component';
import { IdentityInformationsComponent } from './components/AdminPages/IdentityInformationComponents/identity-informations/identity-informations.component';
import { MenuComponent } from './components/AdminPages/menu/menu.component';
import { PhoneNumberDetailComponent } from './components/AdminPages/PhoneNumberComponents/phone-number-detail/phone-number-detail.component';
import { PhoneNumbersComponent } from './components/AdminPages/PhoneNumberComponents/phone-numbers/phone-numbers.component';
import { RentalDetailDetailComponent } from './components/AdminPages/RentalDetailComponents/rental-detail-detail/rental-detail-detail.component';
import { RentalDetailsComponent } from './components/AdminPages/RentalDetailComponents/rental-details/rental-details.component';
import { UserDetailComponent } from './components/AdminPages/UserComponents/user-detail/user-detail.component';
import { UsersComponent } from './components/AdminPages/UserComponents/users/users.component';
import { CustomerMenuComponent } from './components/CustomerPages/customer-menu/customer-menu.component';
import { EmployeeMenuComponent } from './components/EmployeePages/employee-menu/employee-menu.component';
import { LoginComponent } from './components/login/login.component';
import { NaviComponent } from './components/navi/navi.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AdminsFilterPipe } from './pipes/admins-filter.pipe';
import { BranchsFilterPipe } from './pipes/branchs-filter.pipe';
import { BrandsFilterPipe } from './pipes/brands-filter.pipe';
import { CarImagesFilterPipe } from './pipes/car-images-filter.pipe';
import { CardsFilterPipe } from './pipes/cards-filter.pipe';
import { CarsFilterPipe } from './pipes/cars-filter.pipe';
import { CaseTypesFilterPipe } from './pipes/case-types-filter.pipe';
import { ClassesFilterPipe } from './pipes/classes-filter.pipe';
import { ColorsFilterPipe } from './pipes/colors-filter.pipe';
import { DrivingInformationsFilterPipe } from './pipes/driving-informations-filter.pipe';
import { FuelsFilterPipe } from './pipes/fuels-filter.pipe';
import { IdentityInformationsFilterPipe } from './pipes/identity-informations-filter.pipe';
import { PhoneNumbersFilterPipe } from './pipes/phone-numbers-filter.pipe';
import { RentalDetailsFilterPipe } from './pipes/rental-details-filter.pipe';
import { GearsFilterPipe } from './pipes/gears-filter.pipe';
import { UsersFilterPipe } from './pipes/users-filter.pipe';
import { RentalGearFilterPipe } from './pipes/rentalFilter/rental-gear-filter.pipe';
import { RentalColorFilterPipe } from './pipes/rentalFilter/rental-color-filter.pipe';
import { RentalBrandFilterPipe } from './pipes/rentalFilter/rental-brand-filter.pipe';
import { RentalFuelFilterPipe } from './pipes/rentalFilter/rental-fuel-filter.pipe';
import { RentalClassFilterPipe } from './pipes/rentalFilter/rental-class-filter.pipe';
import { RentalCaseTypeFilterPipe } from './pipes/rentalFilter/rental-case-type-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    MenuComponent,
    LoginComponent,
    //GetAllComponent
    AdminsComponent,
    AuthComponent,
    BranchsComponent,
    BrandsComponent,
    CarsComponent,
    CardsComponent,
    CarImagesComponent,
    CaseTypesComponent,
    ClassesComponent,
    ColorsComponent,
    CustomersComponent,
    DrivingInformationsComponent,
    FuelsComponent,
    GearsComponent,
    IdentityInformationsComponent,
    PhoneNumbersComponent,
    RentalDetailsComponent,
    UsersComponent,
    //AddComponent
    AdminAddComponent,
    //UpdateComponent
    AdminUpdateComponent,
    //DeleteComponent
    AdminDeleteComponent,
    //DetailComponent
    AdminDetailComponent,
    CarDetailComponent,
    CardDetailComponent,
    CarImageDetailComponent,
    CustomerDetailComponent,
    DrivingInformationDetailComponent,
    IdentityInformationDetailComponent,
    PhoneNumberDetailComponent,
    RentalDetailDetailComponent,
    UserDetailComponent,
    //Pipes
    AdminsFilterPipe,
    BranchsFilterPipe,
    BrandsFilterPipe,
    CarsFilterPipe,
    CardsFilterPipe,
    CarImagesFilterPipe,
    CaseTypesFilterPipe,
    ClassesFilterPipe,
    ColorsFilterPipe,
    DrivingInformationsFilterPipe,
    FuelsFilterPipe,
    GearsFilterPipe,
    IdentityInformationsFilterPipe,
    PhoneNumbersFilterPipe,
    RentalDetailsFilterPipe,
    UsersFilterPipe,
    CustomerMenuComponent,
    EmployeeMenuComponent,
    RegisterComponent,
    GetByUsableComponent,
    RentalGearFilterPipe,
    RentalColorFilterPipe,
    RentalBrandFilterPipe,
    RentalFuelFilterPipe,
    RentalClassFilterPipe,
    RentalCaseTypeFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectSearchModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
