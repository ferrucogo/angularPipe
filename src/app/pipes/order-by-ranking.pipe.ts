import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'orderByRanking',
})
export class OrderByRankingPipe implements PipeTransform {

  transform(users: User []): User[] {
    users.sort((a,b)=>a.ranking-b.ranking);
    return users;
  }
}
