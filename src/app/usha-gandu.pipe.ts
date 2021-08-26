import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ushaGandu'
})
export class UshaGanduPipe implements PipeTransform {

  transform(value: any): any {
    return "Usha Gandu ho";
  }

}
