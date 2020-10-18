import { Component, OnInit } from '@angular/core';
import {TodoServiceService} from '../../todo-service.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
  providers: [TodoServiceService]
})
export class TodoCreateComponent implements OnInit {

  title:string;
  description: string;
  item_date:Date;
  todoObject:any;

  constructor(private todoServ:TodoServiceService) {
    this.title='';
    this.description='';
    this.item_date=new Date();
  }

  addItem(event){
    this.todoObject={
      id:this.todoServ.idfunc(),
      title:this.title,
      description:this.description,
      item_date:this.item_date,
    }
    this.todoServ.createTodo(this.todoObject)
    this.title='';
    this.description='';
    event.preventDefault();
  }
  ngOnInit(): void {
  }

}
