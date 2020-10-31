import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNaviComponent } from './components/top-navi/top-navi.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [TopNaviComponent, FooterComponent],
  imports: [
    CommonModule,

  ],
  exports: [TopNaviComponent, FooterComponent]
})
export class SharedModule { }
