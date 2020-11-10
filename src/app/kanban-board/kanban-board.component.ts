import { ConfirmComponent } from './../confirm/confirm.model';

import { Board } from './board.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css'],
})
export class KanbanBoardComponent implements OnInit {
  newBoardName: string = '';
  boards: Board[] = [];

  todo: Board = {
    id: '1',
    name: 'TODO',
    contents: ['1', '2'],
    newJob: '',
  };

  doing: Board = {
    id: '2',
    name: 'DOING',
    contents: ['1', '2'],
    newJob: '',
  };

  done: Board = {
    id: '3',
    name: 'DONE',
    contents: ['1', '2'],
    newJob: '',
  };

  constructor(
    private simpleModalService: SimpleModalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.boards.push(this.todo);
    this.boards.push(this.doing);
    this.boards.push(this.done);
    console.log(this.boards);
    localStorage.setItem('dataBoards', JSON.stringify(this.boards));
  }

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

  closeTab(id: string) {
    let disposable = this.simpleModalService
      .addModal(ConfirmComponent, {
        title: 'Xoá bảng',
        message: 'Bạn có muốn xoá bảng này không?',
      })
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].id == id) {
              this.boards.splice(i, 1);
              this.toastr.success('Xoá bảng thành công', 'Thông báo');
              localStorage.setItem('dataBoards', JSON.stringify(this.boards));
            }
          }
        } else {
          this.toastr.error('Xoá bảng thất bại', 'Lỗi');
        }
      });
    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }

  deleteJob(item: string, board: Board) {
    let index = board.contents.indexOf(item);
    console.log(index);

    let disposable = this.simpleModalService
      .addModal(ConfirmComponent, {
        title: 'Xoá job',
        message: 'Bạn có muốn xoá job này không?',
      })
      .subscribe((isConfirmed) => {
        //We get modal result
        if (isConfirmed) {
          if (index >= 0) {
            board.contents.splice(index, 1);
            this.toastr.success('Xoá job thành công', 'Thông báo');
            localStorage.setItem('dataBoards', JSON.stringify(this.boards));
          }
        } else {
          this.toastr.error('Xoá job thất bại', 'Lỗi');
        }
      });
    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }

  addNewJob(board: Board) {
    if (board.newJob.match(/^\s+$/) === null && board.newJob.length != 0) {
      board.contents.push(board.newJob);
      board.newJob = '';
      this.toastr.success('Thêm mới công việc thành công', 'Thông báo');
      localStorage.setItem('dataBoards', JSON.stringify(this.boards));
    } else {
      this.toastr.warning(
        'Không được nhập chuỗi rỗng hoặc khoảng trắng!!!',
        'Cảnh báo'
      );
    }
  }

  addNewBoard() {
    if (
      this.newBoardName.match(/^\s+$/) === null &&
      this.newBoardName.length != 0
    ) {
      let newBoard: Board = new Board();
      newBoard.name = this.newBoardName;
      newBoard.contents = [];
      this.boards.push(newBoard);
      this.newBoardName = '';
      this.toastr.success('Thêm mới bảng thành công', 'Thông báo');
      localStorage.setItem('dataBoards', JSON.stringify(this.boards));
    } else {
      this.toastr.warning(
        'Không được nhập chuỗi rỗng hoặc khoảng trắng!!!',
        'Cảnh báo'
      );
    }
  }
}
