import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { AdminAddComponent } from './components/AdminComponents/admin-add/admin-add.component';
import { AdminDeleteComponent } from './components/AdminComponents/admin-delete/admin-delete.component';
import { AdminDetailComponent } from './components/AdminComponents/admin-detail/admin-detail.component';
import { AdminUpdateComponent } from './components/AdminComponents/admin-update/admin-update.component';
import { AdminsComponent } from './components/AdminComponents/admins/admins.component';
import { AuthComponent } from './components/AuthComponents/auth/auth.component';
import { BranchsComponent } from './components/BranchComponents/branchs/branchs.component';
import { BrandsComponent } from './components/BrandComponents/brands/brands.component';
import { CarDetailComponent } from './components/CarComponents/car-detail/car-detail.component';
import { CarsComponent } from './components/CarComponents/cars/cars.component';
import { CardDetailComponent } from './components/CardComponents/card-detail/card-detail.component';
import { CardsComponent } from './components/CardComponents/cards/cards.component';
import { CarImageDetailComponent } from './components/CarImageComponents/car-image-detail/car-image-detail.component';
import { CarImagesComponent } from './components/CarImageComponents/car-images/car-images.component';
import { CaseTypesComponent } from './components/CaseTypeComponents/case-types/case-types.component';
import { ClassesComponent } from './components/ClassComponents/classes/classes.component';
import { ColorsComponent } from './components/ColorComponents/colors/colors.component';
import { CustomerDetailComponent } from './components/CustomerComponents/customer-detail/customer-detail.component';
import { CustomersComponent } from './components/CustomerComponents/customers/customers.component';
import { DrivingInformationDetailComponent } from './components/DrivingInformationComponents/driving-information-detail/driving-information-detail.component';
import { DrivingInformationsComponent } from './components/DrivingInformationComponents/driving-informations/driving-informations.component';
import { FuelsComponent } from './components/FuelComponents/fuels/fuels.component';
import { GearsComponent } from './components/GearComponents/gears/gears.component';
import { IdentityInformationDetailComponent } from './components/IdentityInformationComponents/identity-information-detail/identity-information-detail.component';
import { IdentityInformationsComponent } from './components/IdentityInformationComponents/identity-informations/identity-informations.component';
import { LoginComponent } from './components/login/login.component';
import { PhoneNumberDetailComponent } from './components/PhoneNumberComponents/phone-number-detail/phone-number-detail.component';
import { PhoneNumbersComponent } from './components/PhoneNumberComponents/phone-numbers/phone-numbers.component';
import { RentalDetailDetailComponent } from './components/RentalDetailComponents/rental-detail-detail/rental-detail-detail.component';
import { RentalDetailsComponent } from './components/RentalDetailComponents/rental-details/rental-details.component';
import { UserDetailComponent } from './components/UserComponents/user-detail/user-detail.component';
import { UsersComponent } from './components/UserComponents/users/users.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BrandsComponent },
  { path: 'login', component: LoginComponent },

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
