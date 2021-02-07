import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { FormsModule } from  '@angular/forms';

import { MaterializeButtonModule, MaterializeCardModule,MaterializeTextAreaModule, MaterializeNavbarModule,MaterializeCheckboxModule ,MaterializeInputModule,MaterializeRadioGroupModule} from 'materialize-angular';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    TodoItemComponent,
    AddtodoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterializeButtonModule,
    MaterializeCardModule,
    MaterializeNavbarModule,
    MaterializeInputModule,MaterializeRadioGroupModule,
    MaterializeCheckboxModule,MaterializeTextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
