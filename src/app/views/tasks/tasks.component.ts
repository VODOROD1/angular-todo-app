import { Component } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {
  public tasks: Task[] = [];
  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit() {
    debugger;
    this.dataHandlerService.tasksSubject.subscribe(value => {
      this.tasks = value;
      debugger;
    })
  }
}
