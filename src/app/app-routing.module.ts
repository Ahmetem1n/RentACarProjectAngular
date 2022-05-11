import { GetByUsableComponent } from './components/AdminPages/CarComponents/get-by-usable/get-by-usable.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { PhoneNumberDetailComponent } from './components/AdminPages/PhoneNumberComponents/phone-number-detail/phone-number-detail.component';
import { PhoneNumbersComponent } from './components/AdminPages/PhoneNumberComponents/phone-numbers/phone-numbers.component';
import { RentalDetailDetailComponent } from './components/AdminPages/RentalDetailComponents/rental-detail-detail/rental-detail-detail.component';
import { RentalDetailsComponent } from './components/AdminPages/RentalDetailComponents/rental-details/rental-details.component';
import { UserDetailComponent } from './components/AdminPages/UserComponents/user-detail/user-detail.component';
import { UsersComponent } from './components/AdminPages/UserComponents/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const adminRoutes: Routes = [
  { path: '', pathMatch: 'full', component: BrandsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'deneme', component: GetByUsableComponent },

  //GETALL COMPONENT PATH
  { path: 'admins', component: AdminsComponent, canActivate: [LoginGuard] },
  { path: 'auths', component: AuthComponent },
  { path: 'branchs', component: BranchsComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carImages', component: CarImagesComponent },
  { path: 'caseTypes', component: CaseTypesComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'drivingInformations', component: DrivingInformationsComponent },
  { path: 'fuels', component: FuelsComponent },
  { path: 'gears', component: GearsComponent },
  { path: 'identityInformations', component: IdentityInformationsComponent },
  { path: 'phoneNumbers', component: PhoneNumbersComponent },
  { path: 'rentalDetails', component: RentalDetailsComponent },
  { path: 'users', component: UsersComponent },

  //ADD COMPONENT PATH
  { path: 'admin/add', component: AdminAddComponent },

  //DELETE COMPONENT PATH
  { path: 'admin/delete/:adminId', component: AdminDeleteComponent },

  //UPDATE COMPONENT PATH
  { path: 'admin/update/:adminId', component: AdminUpdateComponent },

  //DETAIL COMPONENT PATH
  { path: 'admin/detail/:adminId', component: AdminDetailComponent },
  { path: 'car/detail', component: CarDetailComponent },
  { path: 'card/detail', component: CardDetailComponent },
  { path: 'carImage/detail', component: CarImageDetailComponent },
  { path: 'customer/detail', component: CustomerDetailComponent },
  {
    path: 'drivingInformation/detail',
    component: DrivingInformationDetailComponent,
  },
  {
    path: 'identityInformation/detail',
    component: IdentityInformationDetailComponent,
  },
  { path: 'phoneNumber/detail', component: PhoneNumberDetailComponent },
  { path: 'rentalDetail/detail', component: RentalDetailDetailComponent },
  { path: 'user/detail/:userId', component: UserDetailComponent },
];

const employeeRoutes: Routes = [
  { path: '', pathMatch: 'full', component: BrandsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  //GETALL COMPONENT PATH
  { path: 'auths', component: AuthComponent },
  { path: 'branchs', component: BranchsComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'carImages', component: CarImagesComponent },
  { path: 'caseTypes', component: CaseTypesComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'drivingInformations', component: DrivingInformationsComponent },
  { path: 'fuels', component: FuelsComponent },
  { path: 'gears', component: GearsComponent },
  { path: 'identityInformations', component: IdentityInformationsComponent },
  { path: 'phoneNumbers', component: PhoneNumbersComponent },
  { path: 'rentalDetails', component: RentalDetailsComponent },
  { path: 'users', component: UsersComponent },

  //DETAIL COMPONENT PATH
  { path: 'car/detail', component: CarDetailComponent },
  { path: 'carImage/detail', component: CarImageDetailComponent },
  { path: 'customer/detail', component: CustomerDetailComponent },
  {
    path: 'drivingInformation/detail',
    component: DrivingInformationDetailComponent,
  },
  {
    path: 'identityInformation/detail',
    component: IdentityInformationDetailComponent,
  },
  { path: 'phoneNumber/detail', component: PhoneNumberDetailComponent },
  { path: 'rentalDetail/detail', component: RentalDetailDetailComponent },
  { path: 'user/detail/:userId', component: UserDetailComponent },
];

const customerRoutes: Routes = [
  { path: '', pathMatch: 'full', component: BranchsComponent },
];

const publicRoutes: Routes = [
  { path: '', pathMatch: 'full', component: UsersComponent },
];

let role = 'Admin';
@NgModule({
  imports: [
    RouterModule.forRoot(
      role == 'Admin'
        ? adminRoutes
        : role == 'Employee'
        ? employeeRoutes
        : role == 'Customer'
        ? customerRoutes
        : publicRoutes
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
