import { Pipe, PipeTransform } from '@angular/core';

import { Topic } from '../models/topic.model';

@Pipe({
  name: 'isTopicDone'
})
export class IsTopicDonePipe implements PipeTransform {
  transform(value: Topic, args?: any): any {
    const countCompleted = value.checklist.reduce(
      (count, item) => (item.checked ? count + 1 : count),
      0
    );

    return countCompleted === value.checklist.length;
  }
}
