import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../providers/users.service';

@Pipe({ name: 'user' })
export class UserPipe implements PipeTransform {
  transform(user?: User | null) {
    return `User #${user?.id}`;
  }
}
