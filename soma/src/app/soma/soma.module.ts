import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SomaComponent } from './soma';

@NgModule({
  declarations: [SomaComponent],
  imports: [CommonModule],
  exports: [SomaComponent],
})
export class SomaModule {}
