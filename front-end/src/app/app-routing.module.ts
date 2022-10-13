import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { RegisterPeopleComponent } from './components/register-people/register-people.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { UpdatePersonComponent } from './components/update-person/update-person.component';

const routes: Routes = [{
  path: "",
  component: RegisterPeopleComponent
},
{
  path: "list-people",
  component: ListPeopleComponent
},
{
  path: "details/:id",
  component: PersonDetailsComponent
},
{
  path: "update/:id",
  component: UpdatePersonComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
