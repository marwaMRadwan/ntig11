import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/posts/add/add.component';
import { MypostsComponent } from './pages/posts/myposts/myposts.component';
import { ActivateComponent } from './pages/user/activate/activate.component';
import { AddhoppiesComponent } from './pages/user/addhoppies/addhoppies.component';
import { HomeComponent } from './pages/user/home/home.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"user", children:[
    {path:"", component:ProfileComponent},
    {path:"register", component:RegisterComponent},
    {path:"activate/:id", component:ActivateComponent},
    {path:"addHoppies", component:AddhoppiesComponent},
    {path:"login", component:LoginComponent}
  ]},
  {path:"post", children:[
    {path:"", component:MypostsComponent},
    {path:"add", component:AddComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
