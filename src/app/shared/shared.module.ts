import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNaviComponent } from './components/top-navi/top-navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TopNaviComponent,
    FooterComponent],
  imports: [
    CommonModule

    RouterModule // Due to routerLInk in HTML

  ],
  exports: [TopNaviComponent, FooterComponent]
})
export class SharedModule { }
