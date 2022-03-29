import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ModelComponent } from './components/ModelComponents/model/model.component';
import { OperationClaimComponent } from './components/OperationClaimComponents/operation-claim/operation-claim.component';
import { PhoneNumberComponent } from './components/PhoneNumberComponents/phone-number/phone-number.component';
import { RentalDetailComponent } from './components/RentalDetailComponents/rental-detail/rental-detail.component';
import { UserComponent } from './components/UserComponents/user/user.component';
import { UserOperationClaimComponent } from './components/UserOperationClaimComponents/user-operation-claim/user-operation-claim.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BrandComponent },
  { path: 'admins', component: AdminComponent },
  { path: 'auths', component: AuthComponent },
  { path: 'branchs', component: BranchComponent },
  { path: 'brands', component: BrandComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cards', component: CardComponent },
  { path: 'carImages', component: CarImageComponent },
  { path: 'caseTypes', component: CaseTypeComponent },
  { path: 'cities', component: CityComponent },
  { path: 'classes', component: ClassComponent },
  { path: 'colors', component: ColorComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'drivingInformations', component: DrivingInformationComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'fuels', component: FuelComponent },
  { path: 'gears', component: GearComponent },
  { path: 'identityInformations', component: IdentityInformationComponent },
  { path: 'models', component: ModelComponent },
  { path: 'operationClaims', component: OperationClaimComponent },
  { path: 'phoneNumbers', component: PhoneNumberComponent },
  { path: 'rentalDetails', component: RentalDetailComponent },
  { path: 'users', component: UserComponent },
  { path: 'userOperationClaims', component: UserOperationClaimComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
