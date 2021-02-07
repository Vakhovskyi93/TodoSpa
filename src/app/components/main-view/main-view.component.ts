import { Component, OnInit, ViewChild } from '@angular/core';
import { MaindataService }  from '../../../server/maindata.service'
 import { Router } from '@angular/router'

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  todoList = [];
  sortaction = document.querySelector('.sortaction');
  searchText = ''; 
  constructor(
    private service: MaindataService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.service.newTodo.subscribe((data) => { this.todoList.unshift(data)})
    this.getTodos()
    let icons =document.querySelectorAll('.material-icons');
    icons.forEach( i => {
      i.addEventListener('click', ()=>{
        icons.forEach(i => i.classList.remove('sortSelect'));
        i.classList.contains('sortSelect') ?   null : i.classList.add('sortSelect')
      })
      
    })
  }
  getTodos(){ this.todoList = this.service.todoList() }

  delete(id){
    this.service.delete(id)
    this.getTodos();
    this.search()
  }

  done(id){
    this.service.done(id)
    this.getTodos() 
  }

  search(){ this.todoList = this.service.todoList().filter( i => i.title.toLowerCase().indexOf(this.searchText) !== -1) }
  sortASC(){ this.todoList.sort( (a, b) => a.priority - b.priority ) }
  sortDEC(){  this.todoList.sort( (a, b) => b.priority - a.priority ) }
  sortUndone(){ this.todoList.sort( (a, b) => a.status - b.status ) }
  sortDone(){ this.todoList.sort( (a, b) => b.status - a.status) }
  openform(){ this.router.navigate(['/addtodo']) }

}
