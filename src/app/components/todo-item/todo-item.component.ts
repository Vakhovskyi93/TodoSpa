import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';

import { MaindataService }  from '../../../server/maindata.service'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item;
  @Output() delete = new EventEmitter();
  @Output() done = new EventEmitter();

  constructor(
    private service: MaindataService,
  ) { }

  ngOnInit(): void { }
  deleteItem(e){ this.delete.emit(this.item.id) }
  doneItem(e){ this.done.emit(this.item.id)} 

}
