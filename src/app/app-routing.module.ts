import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { AdminAddComponent } from './components/AdminComponents/admin-add/admin-add.component';
import { AdminDeleteComponent } from './components/AdminComponents/admin-delete/admin-delete.component';
import { AdminDetailComponent } from './components/AdminComponents/admin-detail/admin-detail.component';
import { AdminUpdateComponent } from './components/AdminComponents/admin-update/admin-update.component';
import { AdminsComponent } from './components/AdminComponents/admins/admins.component';
import { AuthComponent } from './components/AuthComponents/auth/auth.component';
import { BranchAddComponent } from './components/BranchComponents/branch-add/branch-add.component';
import { BranchDeleteComponent } from './components/BranchComponents/branch-delete/branch-delete.component';
import { BranchUpdateComponent } from './components/BranchComponents/branch-update/branch-update.component';
import { BranchsComponent } from './components/BranchComponents/branchs/branchs.component';
import { BrandAddComponent } from './components/BrandComponents/brand-add/brand-add.component';
import { BrandDeleteComponent } from './components/BrandComponents/brand-delete/brand-delete.component';
import { BrandUpdateComponent } from './components/BrandComponents/brand-update/brand-update.component';
import { BrandsComponent } from './components/BrandComponents/brands/brands.component';
import { CarAddComponent } from './components/CarComponents/car-add/car-add.component';
import { CarDeleteComponent } from './components/CarComponents/car-delete/car-delete.component';
import { CarDetailComponent } from './components/CarComponents/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/CarComponents/car-update/car-update.component';
import { CarsComponent } from './components/CarComponents/cars/cars.component';
import { CardAddComponent } from './components/CardComponents/card-add/card-add.component';
import { CardDeleteComponent } from './components/CardComponents/card-delete/card-delete.component';
import { CardDetailComponent } from './components/CardComponents/card-detail/card-detail.component';
import { CardUpdateComponent } from './components/CardComponents/card-update/card-update.component';
import { CardsComponent } from './components/CardComponents/cards/cards.component';
import { CarImageAddComponent } from './components/CarImageComponents/car-image-add/car-image-add.component';
import { CarImageDeleteComponent } from './components/CarImageComponents/car-image-delete/car-image-delete.component';
import { CarImageDetailComponent } from './components/CarImageComponents/car-image-detail/car-image-detail.component';
import { CarImageUpdateComponent } from './components/CarImageComponents/car-image-update/car-image-update.component';
import { CarImagesComponent } from './components/CarImageComponents/car-images/car-images.component';
import { CaseTypeAddComponent } from './components/CaseTypeComponents/case-type-add/case-type-add.component';
import { CaseTypeDeleteComponent } from './components/CaseTypeComponents/case-type-delete/case-type-delete.component';
import { CaseTypeDetailComponent } from './components/CaseTypeComponents/case-type-detail/case-type-detail.component';
import { CaseTypeUpdateComponent } from './components/CaseTypeComponents/case-type-update/case-type-update.component';
import { CaseTypesComponent } from './components/CaseTypeComponents/case-types/case-types.component';
import { CitiesComponent } from './components/CityComponents/cities/cities.component';
import { CityDetailComponent } from './components/CityComponents/city-detail/city-detail.component';
import { ClassAddComponent } from './components/ClassComponents/class-add/class-add.component';
import { ClassDeleteComponent } from './components/ClassComponents/class-delete/class-delete.component';
import { ClassDetailComponent } from './components/ClassComponents/class-detail/class-detail.component';
import { ClassUpdateComponent } from './components/ClassComponents/class-update/class-update.component';
import { ClassesComponent } from './components/ClassComponents/classes/classes.component';
import { ColorAddComponent } from './components/ColorComponents/color-add/color-add.component';
import { ColorDeleteComponent } from './components/ColorComponents/color-delete/color-delete.component';
import { ColorDetailComponent } from './components/ColorComponents/color-detail/color-detail.component';
import { ColorUpdateComponent } from './components/ColorComponents/color-update/color-update.component';
import { ColorsComponent } from './components/ColorComponents/colors/colors.component';
import { CustomerAddComponent } from './components/CustomerComponents/customer-add/customer-add.component';
import { CustomerDeleteComponent } from './components/CustomerComponents/customer-delete/customer-delete.component';
import { CustomerDetailComponent } from './components/CustomerComponents/customer-detail/customer-detail.component';
import { CustomerUpdateComponent } from './components/CustomerComponents/customer-update/customer-update.component';
import { CustomersComponent } from './components/CustomerComponents/customers/customers.component';
import { DrivingInformationAddComponent } from './components/DrivingInformationComponents/driving-information-add/driving-information-add.component';
import { DrivingInformationDeleteComponent } from './components/DrivingInformationComponents/driving-information-delete/driving-information-delete.component';
import { DrivingInformationDetailComponent } from './components/DrivingInformationComponents/driving-information-detail/driving-information-detail.component';
import { DrivingInformationUpdateComponent } from './components/DrivingInformationComponents/driving-information-update/driving-information-update.component';
import { DrivingInformationsComponent } from './components/DrivingInformationComponents/driving-informations/driving-informations.component';
import { EmployeeAddComponent } from './components/EmployeeComponents/employee-add/employee-add.component';
import { EmployeeDeleteComponent } from './components/EmployeeComponents/employee-delete/employee-delete.component';
import { EmployeeDetailComponent } from './components/EmployeeComponents/employee-detail/employee-detail.component';
import { EmployeeUpdateComponent } from './components/EmployeeComponents/employee-update/employee-update.component';
import { EmployeesComponent } from './components/EmployeeComponents/employees/employees.component';
import { FuelAddComponent } from './components/FuelComponents/fuel-add/fuel-add.component';
import { FuelDeleteComponent } from './components/FuelComponents/fuel-delete/fuel-delete.component';
import { FuelDetailComponent } from './components/FuelComponents/fuel-detail/fuel-detail.component';
import { FuelUpdateComponent } from './components/FuelComponents/fuel-update/fuel-update.component';
import { FuelsComponent } from './components/FuelComponents/fuels/fuels.component';
import { GearAddComponent } from './components/GearComponents/gear-add/gear-add.component';
import { GearDeleteComponent } from './components/GearComponents/gear-delete/gear-delete.component';
import { GearDetailComponent } from './components/GearComponents/gear-detail/gear-detail.component';
import { GearUpdateComponent } from './components/GearComponents/gear-update/gear-update.component';
import { GearsComponent } from './components/GearComponents/gears/gears.component';
import { IdentityInformationAddComponent } from './components/IdentityInformationComponents/identity-information-add/identity-information-add.component';
import { IdentityInformationDeleteComponent } from './components/IdentityInformationComponents/identity-information-delete/identity-information-delete.component';
import { IdentityInformationDetailComponent } from './components/IdentityInformationComponents/identity-information-detail/identity-information-detail.component';
import { IdentityInformationUpdateComponent } from './components/IdentityInformationComponents/identity-information-update/identity-information-update.component';
import { IdentityInformationsComponent } from './components/IdentityInformationComponents/identity-informations/identity-informations.component';
import { LoginComponent } from './components/login/login.component';
import { ModelAddComponent } from './components/ModelComponents/model-add/model-add.component';
import { ModelDeleteComponent } from './components/ModelComponents/model-delete/model-delete.component';
import { ModelDetailComponent } from './components/ModelComponents/model-detail/model-detail.component';
import { ModelUpdateComponent } from './components/ModelComponents/model-update/model-update.component';
import { ModelsComponent } from './components/ModelComponents/models/models.component';
import { OperationClaimAddComponent } from './components/OperationClaimComponents/operation-claim-add/operation-claim-add.component';
import { OperationClaimDeleteComponent } from './components/OperationClaimComponents/operation-claim-delete/operation-claim-delete.component';
import { OperationClaimDetailComponent } from './components/OperationClaimComponents/operation-claim-detail/operation-claim-detail.component';
import { OperationClaimUpdateComponent } from './components/OperationClaimComponents/operation-claim-update/operation-claim-update.component';
import { OperationClaimsComponent } from './components/OperationClaimComponents/operation-claims/operation-claims.component';
import { PhoneNumberAddComponent } from './components/PhoneNumberComponents/phone-number-add/phone-number-add.component';
import { PhoneNumberDeleteComponent } from './components/PhoneNumberComponents/phone-number-delete/phone-number-delete.component';
import { PhoneNumberDetailComponent } from './components/PhoneNumberComponents/phone-number-detail/phone-number-detail.component';
import { PhoneNumberUpdateComponent } from './components/PhoneNumberComponents/phone-number-update/phone-number-update.component';
import { PhoneNumbersComponent } from './components/PhoneNumberComponents/phone-numbers/phone-numbers.component';
import { RentalDetailAddComponent } from './components/RentalDetailComponents/rental-detail-add/rental-detail-add.component';
import { RentalDetailDeleteComponent } from './components/RentalDetailComponents/rental-detail-delete/rental-detail-delete.component';
import { RentalDetailDetailComponent } from './components/RentalDetailComponents/rental-detail-detail/rental-detail-detail.component';
import { RentalDetailUpdateComponent } from './components/RentalDetailComponents/rental-detail-update/rental-detail-update.component';
import { RentalDetailsComponent } from './components/RentalDetailComponents/rental-details/rental-details.component';
import { UserAddComponent } from './components/UserComponents/user-add/user-add.component';
import { UserDeleteComponent } from './components/UserComponents/user-delete/user-delete.component';
import { UserDetailComponent } from './components/UserComponents/user-detail/user-detail.component';
import { UserUpdateComponent } from './components/UserComponents/user-update/user-update.component';
import { UsersComponent } from './components/UserComponents/users/users.component';
import { UserOperationClaimAddComponent } from './components/UserOperationClaimComponents/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimDeleteComponent } from './components/UserOperationClaimComponents/user-operation-claim-delete/user-operation-claim-delete.component';
import { UserOperationClaimDetailComponent } from './components/UserOperationClaimComponents/user-operation-claim-detail/user-operation-claim-detail.component';
import { UserOperationClaimUpdateComponent } from './components/UserOperationClaimComponents/user-operation-claim-update/user-operation-claim-update.component';
import { UserOperationClaimsComponent } from './components/UserOperationClaimComponents/user-operation-claims/user-operation-claims.component';
import { LoginGuard } from './guards/login.guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: BrandsComponent },
  { path: 'login',  component: LoginComponent },

  //GETALL COMPONENT PATH
  { path: 'admins', component: AdminsComponent,canActivate:[LoginGuard] },
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

  //ADD COMPONENT PATH
  { path: 'admin/add', component: AdminAddComponent },
  { path: 'branch/add', component: BranchAddComponent },
  { path: 'brand/add', component: BrandAddComponent },
  { path: 'car/add', component: CarAddComponent },
  { path: 'card/add', component: CardAddComponent },
  { path: 'carImage/add', component: CarImageAddComponent },
  { path: 'caseType/add', component: CaseTypeAddComponent },
  { path: 'class/add', component: ClassAddComponent },
  { path: 'color/add', component: ColorAddComponent },
  { path: 'customer/add', component: CustomerAddComponent },
  { path: 'drivingInformation/add', component: DrivingInformationAddComponent },
  { path: 'employee/add', component: EmployeeAddComponent },
  { path: 'fuel/add', component: FuelAddComponent },
  { path: 'gear/add', component: GearAddComponent },
  { path: 'identityInformation/add', component: IdentityInformationAddComponent },
  { path: 'model/add', component: ModelAddComponent },
  { path: 'operationClaim/add', component: OperationClaimAddComponent },
  { path: 'phoneNumber/add', component: PhoneNumberAddComponent },
  { path: 'rentalDetail/add', component: RentalDetailAddComponent },
  { path: 'user/add', component: UserAddComponent },
  { path: 'userOperationClaim/add', component: UserOperationClaimAddComponent },

  //DELETE COMPONENT PATH
  { path: 'admin/delete/:adminId', component: AdminDeleteComponent },
  { path: 'branch/delete', component: BranchDeleteComponent },
  { path: 'brand/delete', component: BrandDeleteComponent },
  { path: 'car/delete', component: CarDeleteComponent },
  { path: 'card/delete', component: CardDeleteComponent },
  { path: 'carImage/delete', component: CarImageDeleteComponent },
  { path: 'caseType/delete', component: CaseTypeDeleteComponent },
  { path: 'class/delete', component: ClassDeleteComponent },
  { path: 'color/delete', component: ColorDeleteComponent },
  { path: 'customer/delete', component: CustomerDeleteComponent },
  { path: 'drivingInformation/delete', component: DrivingInformationDeleteComponent },
  { path: 'employee/delete', component: EmployeeDeleteComponent },
  { path: 'fuel/delete', component: FuelDeleteComponent },
  { path: 'gear/delete', component: GearDeleteComponent },
  { path: 'identityInformation/delete', component: IdentityInformationDeleteComponent },
  { path: 'model/delete', component: ModelDeleteComponent },
  { path: 'operationClaim/delete', component: OperationClaimDeleteComponent },
  { path: 'phoneNumber/delete', component: PhoneNumberDeleteComponent },
  { path: 'rentalDetail/delete', component: RentalDetailDeleteComponent },
  { path: 'user/delete', component: UserDeleteComponent },
  { path: 'userOperationClaim/delete', component: UserOperationClaimDeleteComponent },

  //UPDATE COMPONENT PATH
  { path: 'admin/update/:adminId', component: AdminUpdateComponent },
  { path: 'branch/update', component: BranchUpdateComponent },
  { path: 'brand/update', component: BrandUpdateComponent },
  { path: 'car/update', component: CarUpdateComponent },
  { path: 'card/update', component: CardUpdateComponent },
  { path: 'carImage/update', component: CarImageUpdateComponent },
  { path: 'caseType/update', component: CaseTypeUpdateComponent },
  { path: 'class/update', component: ClassUpdateComponent },
  { path: 'color/update', component: ColorUpdateComponent },
  { path: 'customer/update', component: CustomerUpdateComponent },
  { path: 'drivingInformation/update', component: DrivingInformationUpdateComponent },
  { path: 'employee/update', component: EmployeeUpdateComponent },
  { path: 'fuel/update', component: FuelUpdateComponent },
  { path: 'gear/update', component: GearUpdateComponent },
  { path: 'identityInformation/update', component: IdentityInformationUpdateComponent },
  { path: 'model/update', component: ModelUpdateComponent },
  { path: 'operationClaim/update', component: OperationClaimUpdateComponent },
  { path: 'phoneNumber/update', component: PhoneNumberUpdateComponent },
  { path: 'rentalDetail/update', component: RentalDetailUpdateComponent },
  { path: 'user/update', component: UserUpdateComponent },
  { path: 'userOperationClaim/update', component: UserOperationClaimUpdateComponent },

  //DETAIL COMPONENT PATH
  { path: 'admin/detail/:adminId', component: AdminDetailComponent },  

  { path: 'car/detail', component: CarDetailComponent },
  { path: 'card/detail', component: CardDetailComponent },
  { path: 'carImage/detail', component: CarImageDetailComponent },
  { path: 'caseType/detail', component: CaseTypeDetailComponent },
  { path: 'city/detail', component: CityDetailComponent },
  { path: 'class/detail', component: ClassDetailComponent },
  { path: 'color/detail', component: ColorDetailComponent },
  { path: 'customer/detail', component: CustomerDetailComponent },
  { path: 'drivingInformation/detail', component: DrivingInformationDetailComponent },
  { path: 'employee/detail', component: EmployeeDetailComponent },
  { path: 'fuel/detail', component: FuelDetailComponent },
  { path: 'gear/detail', component: GearDetailComponent },
  { path: 'identityInformation/detail', component: IdentityInformationDetailComponent },
  { path: 'model/detail', component: ModelDetailComponent },
  { path: 'operationClaim/detail', component: OperationClaimDetailComponent },
  { path: 'phoneNumber/detail', component: PhoneNumberDetailComponent },
  { path: 'rentalDetail/detail', component: RentalDetailDetailComponent },
  { path: 'user/detail/:userId', component: UserDetailComponent },
  { path: 'userOperationClaim/detail', component: UserOperationClaimDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
