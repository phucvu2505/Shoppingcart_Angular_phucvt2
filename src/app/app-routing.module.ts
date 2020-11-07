import { WelcomeComponent } from './welcome/welcome.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'kanbanboard', component: KanbanBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
