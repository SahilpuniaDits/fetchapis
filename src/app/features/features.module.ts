import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
