import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';

export class Todo{

  constructor(
    public id: number, 
    public description: string, 
    public done: boolean, 
    public targetDate: Date
  ){

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

todos: Todo[]
message: String

//= [
  
//   new Todo(1,'Learn to Dance', false, new Date()),
//   new Todo(2,'Become an Expert at Angular', false, new Date()),
//   new Todo(3,'Visit India', false, new Date()),
//   new Todo(4,'Visit Nueva Zelanda', false, new Date()),
//   new Todo(5,'Visit Australia', false, new Date()),
//   new Todo(6,'Visit Canada', false, new Date())
// // { id: 1, description: 'Learn to Dance'},
// // { id: 2, description: 'Become an Expert at Angular'},
// // { id: 3, description: 'Visit India'},
// // { id: 4, description: 'Visit Nueva Zelanda'},
// // { id: 5, description: 'Visit Australia'},
// // { id: 6, description: 'Visit Canada'},
//]


// todo =  {
//  id : 1,
//  description : 'Learn to Dance'

// }

  constructor(
    private todoService: TodoDataService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('Alan').subscribe(
      response => {
        //console.log(response);
        this.todos = response;
      }
    )
  }
  deleteTodo(id){
    //onsole.log(`DeleteTodo ${id}`)
    this.todoService.deleteTodo('Alan', id).subscribe(
      response=>{
        //console.log(response);
        this.message= `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }
    updateTodo(id){
        //console.log(`Update ${id}`);
        this.router.navigate(['todos', id])

    }

    addTodo(){
      //console.log("Add Todo")
      this.router.navigate(['todos', -1])
    }
}
