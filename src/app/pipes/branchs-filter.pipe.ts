import { BranchDetailDto } from 'src/app/models/branchDetailDto';
import { CityService } from './../services/city.service';
import { City } from './../models/city';
import { Branch } from './../models/branch';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'branchsFilter',
})
export class BranchsFilterPipe implements PipeTransform {
  cities: City[] = [];

  constructor(private cityService: CityService) {}

  getCities() {
    this.cityService.getCities().subscribe((response) => {
      this.cities = response.data;
    });
  }

  ngOnInit(): void {
    this.getCities();
  }

  transform(value: BranchDetailDto[], branchFilter: string): BranchDetailDto[] {
    branchFilter = branchFilter ? branchFilter.toLocaleLowerCase() : '';
    console.log(branchFilter);
    return branchFilter
      ? value.filter(
          (b: BranchDetailDto) =>
            b.branchName.toLocaleLowerCase().indexOf(branchFilter) !== -1 ||
            b.cityName.toLocaleLowerCase().indexOf(branchFilter) !== -1 
        )
      : value;
  }
}
