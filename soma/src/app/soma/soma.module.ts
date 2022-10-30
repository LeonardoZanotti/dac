import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SomaService } from './services';
import { SomaComponent } from './soma';

@NgModule({
  declarations: [SomaComponent],
  imports: [CommonModule],
  exports: [SomaComponent],
  providers: [SomaService],
})
export class SomaModule {}
