import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { HomeComponent } from './pages/general/home/home.component';
import { ActivateComponent } from './pages/user/activate/activate.component';
import { AddhoppiesComponent } from './pages/user/addhoppies/addhoppies.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { AddComponent } from './pages/posts/add/add.component';
import { MypostsComponent } from './pages/posts/myposts/myposts.component';
import { Error404Component } from './pages/general/error404/error404.component';
import { DoctorcardComponent } from './shared/doctorcard/doctorcard.component';
import { GlobalService } from './providers/services/global.service';
import { AuthInterceptor } from './providers/interceptors/auth.interceptor';

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
    MypostsComponent,
    Error404Component,
    DoctorcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    GlobalService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
