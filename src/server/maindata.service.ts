import { Injectable } from '@angular/core';
import {Todo} from '../interface/todo'

import { BehaviorSubject } from 'rxjs'

let list: Todo[] = [
  {
    id: '1',
    title: 'Create todo app',
    body: 'Create todo app until 02.07 23.59 ',
    status: false,
    priority: 10
  },
  {
    id: '12',
    title: 'Take a dinner',
    body: 'take a dinner before 6pm ',
    status: false,
    priority: 5
  },
  {
    id: '5',
    title: 'Relax',
    body: 'Long Breake at 2pm  ',
    status: true,
    priority: 8
  },


]
 
 




@Injectable({
  providedIn: 'root'
})
export class MaindataService {

  private todoSourse = new BehaviorSubject<Todo>({id: '',
    title: '',
    body: '',
    status: false,
    priority: 0});

    newTodo = this.todoSourse.asObservable()
  constructor() { 
  }

  todoList(){ return list }
  delete(e){ list = list.filter(i => i.id !== e) }
  done(e){  list.find(i => i.id == e ? i.status = true : null) }
  addTodo(i){ list.push(i) }
   emitNewTodo(todo:Todo){
    this.todoSourse.next(todo)
   }


}
