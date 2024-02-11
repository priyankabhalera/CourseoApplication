import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CourseServiceService } from './course/course-service.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CourseComponent,
    LoginComponent,
    SignupComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    CourseServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
