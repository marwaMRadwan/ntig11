import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { Err404Component } from './pages/err404/err404.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PostsComponent } from './pages/posts/posts.component'
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"posts", component:PostsComponent},
  {path:"photos", component:PhotosComponent},
  {path:"photos/:id", component:SingleComponent},
  {path:"**", component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
