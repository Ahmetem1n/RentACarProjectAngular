import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
