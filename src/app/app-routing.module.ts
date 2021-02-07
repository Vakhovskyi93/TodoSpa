import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from '../app/components/addtodo/addtodo.component'
import { MainViewComponent } from '../app/components/main-view/main-view.component'

const routes: Routes = [
  {path: '', component: MainViewComponent},
  {path: 'addtodo', component: AddtodoComponent , outlet: "popup" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
