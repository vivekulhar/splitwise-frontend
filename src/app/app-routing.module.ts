import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-user', pathMatch: 'full' },
  { path: 'create-user', component: RegisterUserComponent },
  { path: 'create-group', component: CreateGroupComponent },
  {
    path: 'create-expense',
    component: CreateExpenseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
