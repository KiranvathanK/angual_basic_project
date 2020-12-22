import { HttpModule } from '@angular/http';
import { SummaryPipe } from './summary.pipe';
import { courseService } from './course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatsDirective } from './input-formats.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewFormComponent } from './new-form/new-form.component';
import { PostComponent } from './post/post.component';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatsDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewFormComponent,
    PostComponent,


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [
    courseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
