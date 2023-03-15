import { Component } from '@angular/core'
import { Category } from 'src/app/model/Category'
import { DataHandlerService } from 'src/app/service/data-handler.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  public categories: Category[] = []

  constructor(private dataHandlerService: DataHandlerService) {}

  ngOnInit() {
    debugger;
    this.dataHandlerService.categoriesSubject.subscribe(value => {
      this.categories = value;
      debugger;
    })
  }

  clickCategory(category: Category) {
    debugger;
    const filteredTasks = this.dataHandlerService.fillTasksByCategory(category)
  }
}
