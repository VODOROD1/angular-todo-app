import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { TestData } from '../data/TestData';
import { Task } from '../model/Task';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataHandlerService {

  tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(TestData.tasks)
  categoriesSubject: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>(TestData.categories)

  constructor() {
  }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks)
    debugger;
  }

  fillCategories() {
    this.categoriesSubject.next(TestData.categories)
    debugger;
  }

  fillTasksByCategory(category: Category) {
    let filteredTasks = TestData.tasks.filter((task) => category?.id === task.category?.id)
    this.tasksSubject.next(filteredTasks)
    debugger;
  }
}
