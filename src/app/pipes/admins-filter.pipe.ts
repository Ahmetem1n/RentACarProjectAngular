import { Admin } from './../models/admin';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminsFilter',
})
export class AdminsFilterPipe implements PipeTransform {
  transform(value: Admin[], adminFilter: string): Admin[] {
    adminFilter = adminFilter ? adminFilter.toLocaleLowerCase() : '';
    return adminFilter
      ? value.filter(
          (a: Admin) =>
            String(a.userId).toLocaleLowerCase().indexOf(adminFilter) !== -1 ||
            String(a.adminId).toLocaleLowerCase().indexOf(adminFilter) !== -1
        )
      : value;
  }
}
