import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carImagesFilter'
})
export class CarImagesFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
