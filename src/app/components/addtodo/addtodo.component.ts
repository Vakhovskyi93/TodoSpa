import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaindataService }  from '../../../server/maindata.service'
@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {

  constructor(public router: Router,
  private service: MaindataService) { }
  title: string = '';
  text: string = '';
  imp: boolean = false;
  priority: number = 1
  id = Math.floor(Math.random() * (999 - 66 + 1))
 
 
  ngOnInit(): void { 
  }

  onclose() { this.router.navigate([{ outlets: { popup: null }}]) }
    
  saveNewTodo(){

      let newTodoItem = {
        id:  this.id.toString() ,
        title: this.title,
        body: this.text,
        status: false,
        priority: this.priority

      }
      //this.service.addTodo(newTodoItem);
this.service.emitNewTodo(newTodoItem)



      this.router.navigate([{ outlets: { popup: null }}]);
  }
  selectMark(e){
    
    document.querySelectorAll('.mark').forEach(i => i.classList.remove('selected'))
    this.priority = e.target.innerText
    e.target.classList.contains('mark')? e.target.classList.add('selected'): null;
  
  }
  
    
}
