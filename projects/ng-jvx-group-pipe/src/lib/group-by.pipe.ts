import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'groupBy',
  pure: false
})
export class GroupByPipe implements PipeTransform {
  transform(value: any[], groupName: string): { group: string, items: any[] }[] {
    const res = [];
    const groups = new Set(value.map(item => item[groupName]));
    for (const group of groups) {
      res.push({group, items: value.filter(item => item[groupName] === group)});
    }
    return res;
  }
}
