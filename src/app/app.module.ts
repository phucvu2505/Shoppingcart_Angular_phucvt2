import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { HeaderComponent } from './header/header.component';
import { SumaryComponent } from './sumary/sumary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,
    HeaderComponent,
    SumaryComponent,
    KanbanBoardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
