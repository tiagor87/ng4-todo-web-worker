import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = ['Test 1', 'Test 2', 'Test 3', 'Test 4'];

  del(i: number) {
    this.todos.splice(i, 1);
  }
}
