import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNaviComponent } from './components/top-navi/top-navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    TopNaviComponent,
    FooterComponent],
  imports: [
    CommonModule,
    MenubarModule, // Due to Tab
    InputTextModule,
    ButtonModule,
    RouterModule // Due to routerLInk in HTML

  ],
  exports: [TopNaviComponent, FooterComponent]
})
export class SharedModule { }
