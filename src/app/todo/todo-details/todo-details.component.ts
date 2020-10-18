import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../todo-service.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
  providers: [TodoServiceService]
})
export class TodoDetailsComponent implements OnInit {

  todo_details:any
  constructor(private todoServ:TodoServiceService) { }

  ngOnInit(): void {
    this.todo_details=this.todoServ.todolist
  }
  
}
