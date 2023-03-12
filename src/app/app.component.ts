import { Component } from '@angular/core';

interface Priority {
  id: number,
  title: string,
  color: string
}

interface Category {
  id: number,
  title: string
}

interface Task {
  id: number,
  title: string,
  status: boolean,
  priority: Priority,
  category: Category,
  term: Date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'todo-app';


}
