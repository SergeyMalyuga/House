import {Pipe, PipeTransform} from '@angular/core';

@Pipe(
  {
    name: 'insertSpaceAt',
  }
)
export class InsertSpaceAtPipe implements PipeTransform {
  transform(value: number, index: number): string {
    if (value === undefined) return '';
    const target = value.toString();
    return target.slice(0, index) + ' ' + target.slice(index)
  }
}
