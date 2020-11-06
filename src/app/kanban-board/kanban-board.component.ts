import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css'],
})
export class KanbanBoardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  todos = [
    'Learn Angular Material',
    'Code Kanban Board App',
    'Code Final Project',
  ];

  doings = ['Learn Angular'];

  dones = [
    'Lear HTML Basic',
    'Learn CSS Basic',
    'Learn Javascript Basic',
    'Code Example image Gallery',
    'Code Example Calculator App',
    'Learn Responsive Web Design',
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
