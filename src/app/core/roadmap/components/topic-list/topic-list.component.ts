import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Topic, ChecklistItem } from 'src/app/shared/models/topic.model';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent {
  @Input() topics: Topic[];
  @Output() itemToggled = new EventEmitter<string>();

  constructor() {}

  toggleItem(id: string) {
    this.itemToggled.emit(id);
  }

  topicTrackBy(index, topic: Topic) {
    return topic.id;
  }

  itemTrackBy(index, item: ChecklistItem) {
    return item.id;
  }
}
