import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'translate', pure: false })
export class MockTranslatePipe implements PipeTransform {
  transform(value: string): string {
    return value + ' (TRANSLATED)';
  }
}
