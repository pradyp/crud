import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUsersComponent } from './edit-users/edit-users.component';

const routes: Routes = [
  {path:"Users" , component:UsersComponent},
  {path:"Users-List" , component:UsersListComponent},
  {path:"Users-edit" , component:EditUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
