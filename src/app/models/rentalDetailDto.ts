export interface RentalDetailDto {
  rentalId: number;
  userId: number;
  carId: number;
  nationalityId: string;
  carPlate: string;
  rentDate: Date;
  returnDate: Date;
  firstMileage: number;
  lastMileage: number;
}
