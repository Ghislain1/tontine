import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNaviComponent } from './components/top-navi/top-navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonsModule, IconsModule, NavbarModule, WavesModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    TopNaviComponent,
    FooterComponent],
  imports: [
    CommonModule,
    NavbarModule,
    WavesModule,
    IconsModule,
    ButtonsModule,

    RouterModule // Due to routerLInk in HTML

  ],
  exports: [TopNaviComponent, FooterComponent]
})
export class SharedModule { }
