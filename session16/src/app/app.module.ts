import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { HomeComponent } from './pages/user/home/home.component';
import { ActivateComponent } from './pages/user/activate/activate.component';
import { AddhoppiesComponent } from './pages/user/addhoppies/addhoppies.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { AddComponent } from './pages/posts/add/add.component';
import { MypostsComponent } from './pages/posts/myposts/myposts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    ActivateComponent,
    AddhoppiesComponent,
    LoginComponent,
    ProfileComponent,
    AddComponent,
    MypostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
