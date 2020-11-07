import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectShoppingCart() {
    this.router.navigate(['shoppingcart']);
  }

  redirectKanbanBoard() {
    this.router.navigate(['kanbanboard']);
  }
}
