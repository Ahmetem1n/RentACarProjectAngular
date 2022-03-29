import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { IdentityInformationsComponent } from './components/IdentityInformationComponents/identity-informations/identity-informations.component';
import { ModelsComponent } from './components/ModelComponents/models/models.component';
import { OperationClaimsComponent } from './components/OperationClaimComponents/operation-claims/operation-claims.component';
import { PhoneNumbersComponent } from './components/PhoneNumberComponents/phone-numbers/phone-numbers.component';
import { RentalDetailsComponent } from './components/RentalDetailComponents/rental-details/rental-details.component';
import { UsersComponent } from './components/UserComponents/users/users.component';
import { UserOperationClaimsComponent } from './components/UserOperationClaimComponents/user-operation-claims/user-operation-claims.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BrandsComponent },
  { path: 'admins', component: AdminsComponent },
  { path: 'auths', component: AuthComponent },
  { path: 'branchs', component: BranchsComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carImages', component: CarImagesComponent },
  { path: 'caseTypes', component: CaseTypesComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'drivingInformations', component: DrivingInformationsComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'fuels', component: FuelsComponent },
  { path: 'gears', component: GearsComponent },
  { path: 'identityInformations', component: IdentityInformationsComponent },
  { path: 'models', component: ModelsComponent },
  { path: 'operationClaims', component: OperationClaimsComponent },
  { path: 'phoneNumbers', component: PhoneNumbersComponent },
  { path: 'rentalDetails', component: RentalDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'userOperationClaims', component: UserOperationClaimsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
