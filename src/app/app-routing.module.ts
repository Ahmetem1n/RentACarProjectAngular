import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { BranchComponent } from './components/branch/branch.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarComponent } from './components/car/car.component';
import { CardComponent } from './components/card/card.component';
import { CaseTypeComponent } from './components/case-type/case-type.component';
import { CityComponent } from './components/city/city.component';
import { ClassComponent } from './components/class/class.component';
import { ColorComponent } from './components/color/color.component';
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
import { UserOperationClaimComponent } from './components/user-operation-claim/user-operation-claim.component';
import { UserComponent } from './components/user/user.component';

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
