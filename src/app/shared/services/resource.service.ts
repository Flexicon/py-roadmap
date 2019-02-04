import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { topics } from '../data/resources';
import { Topic } from '../models/topic.model';
import { slugify } from '../helpers';

const TopicsProgressKey = 'TopicsProgress';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private topics: Topic[];
  private topics$: BehaviorSubject<Topic[]>;

  constructor() {
    this.topics$ = new BehaviorSubject<Topic[]>([]);
    this.setTopics(this.prepareTopics());
  }

  private setTopics(value: Topic[]): void {
    this.topics = [...value];
    this.topics$.next(this.topics);
  }

  private prepareTopics(): Topic[] {
    const progress = this.getProgressFromStorage();

    return topics.map(topic => {
      const id = `topic__${slugify(topic.title)}`;

      return {
        ...topic,
        id,
        checked: !!progress[id],
        checklist: topic.checklist.map(item => {
          const itemId = `item__${slugify(item.title)}`;
          return { ...item, id: itemId, checked: !!progress[itemId] };
        })
      };
    });
  }

  private getProgressFromStorage() {
    try {
      const progress = localStorage.getItem(TopicsProgressKey);
      return progress ? JSON.parse(progress) : {};
    } catch {
      return {};
    }
  }

  getTopics(): Observable<Topic[]> {
    return this.topics$;
  }

  toggleItemStatus(id: string): void {
    let newStatus = null;
    const newTopics = this.topics.map(t => ({
      ...t,
      checklist: t.checklist.map(item => {
        if (item.id === id) {
          newStatus = !item.checked;
        }
        return {
          ...item,
          checked: item.id === id ? !item.checked : item.checked
        };
      })
    }));

    if (newStatus !== null) {
      this.setTopics(newTopics);

      if (localStorage) {
        const progress = this.getProgressFromStorage();

        if (newStatus) {
          progress[id] = true;
        } else {
          delete progress[id];
        }

        localStorage.setItem(TopicsProgressKey, JSON.stringify(progress));
      }
    }
  }
}
