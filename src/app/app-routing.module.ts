import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoadmapComponent } from './core/roadmap/containers/roadmap/roadmap.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RoadmapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
