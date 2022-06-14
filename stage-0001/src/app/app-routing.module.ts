import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewComponent } from './components/new/new.component';
import { EditComponent  } from './components/edit/edit.component';
import { ScheduleComponent  } from './components/schedule/schedule.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard/:legacyId', component:DashboardComponent},
  {path:'new', component:NewComponent},
  {path:'edit', component:EditComponent},
  {path:'schedule', component:ScheduleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,NewComponent,EditComponent,ScheduleComponent];