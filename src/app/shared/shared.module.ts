import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsTopicDonePipe } from './pipes/is-topic-done.pipe';

const pipes = [IsTopicDonePipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
  imports: [CommonModule]
})
export class SharedModule {}
