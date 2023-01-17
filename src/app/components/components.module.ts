import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { PostsTableComponent } from './posts-table/posts-table.component';



@NgModule({
  declarations: [
    HeroComponent,
    PostsTableComponent
  ],
  exports: [
    HeroComponent,
    PostsTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
