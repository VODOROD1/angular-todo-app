import { Component } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  public categories: Category[] = [];
  public tasks: Task[] = [];

  constructor(private dataHandlerService: DataHandlerService) {}

  ngOnInit() {
    this.categories = this.dataHandlerService.getCategories();
    this.tasks = this.dataHandlerService.getTasks();
  }
}
