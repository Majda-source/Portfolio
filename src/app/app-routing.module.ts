import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntropageComponent } from './intropage/intropage.component';

const routes: Routes = [
  { path: '', component: IntropageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
