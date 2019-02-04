import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ResourceService } from 'src/app/shared/services/resource.service';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/shared/models/topic.model';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  topics$: Observable<Topic[]>;

  constructor(private resourceService: ResourceService) {}

  ngOnInit() {
    this.topics$ = this.resourceService.getTopics();
  }

  toggleItem(id: string) {
    this.resourceService.toggleItemStatus(id);
  }
}
