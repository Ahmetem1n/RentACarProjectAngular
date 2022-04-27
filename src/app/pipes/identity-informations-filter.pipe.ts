import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'identityInformationsFilter'
})
export class IdentityInformationsFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
