import { Class } from './../models/class';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classsFilter',
})
export class ClassesFilterPipe implements PipeTransform {
  transform(value: Class[], classFilter: string): Class[] {
    classFilter = classFilter ? classFilter.toLocaleLowerCase() : '';
    console.log(classFilter);
    return classFilter
      ? value.filter(
          (c: Class) =>
            c.className.toLocaleLowerCase().indexOf(classFilter) !== -1
        )
      : value;
  }
}
