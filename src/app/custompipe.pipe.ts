import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: String, ...args: String[]): String {
    return value +'hello'+ args[0];
  }

}
