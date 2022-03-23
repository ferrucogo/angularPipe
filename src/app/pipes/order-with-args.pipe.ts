import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'orderWithArgs',
})
export class OrderWithArgsPipe implements PipeTransform {
  transform(users: User[], ...args: unknown[]): User[] {
    if (args.length > 0) {
      const arg = args[0];
      if (arg === 'rank') {
        users.sort((a, b) => a.ranking - b.ranking);
      } else {
        users.sort((a, b) => a.name.localeCompare(b.name))
      }
    }
    return users;
  }
}
