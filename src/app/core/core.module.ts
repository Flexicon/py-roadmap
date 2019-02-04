import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

import { RoadmapComponent } from './roadmap/containers/roadmap/roadmap.component';
import { TopicListComponent } from './roadmap/components/topic-list/topic-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RoadmapComponent, TopicListComponent],
  imports: [CommonModule, NgZorroAntdModule, FormsModule, SharedModule]
})
export class CoreModule {}
