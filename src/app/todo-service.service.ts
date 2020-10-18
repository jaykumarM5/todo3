import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todolist=[];
    createTodo(todoObject){
        this.todolist.push(todoObject);   
    }
    idfunc(){
        return this.todolist.length+1;
    }
    deleteTodo(index){
        this.todolist.splice(index,1);
    }
  
}
