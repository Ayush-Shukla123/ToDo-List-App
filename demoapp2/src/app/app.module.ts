import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course.service';
import { AuthorComponent } from './author/author.component';
import { authorService } from './author.service';
import { AyushComponent } from './ayush/ayush.component';
import { ItemsService } from './ayush.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    AyushComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    CoursesService ,  // Angular create a single intense of class (course) in memory which is called SINGLETON pattern.
    authorService,
    ItemsService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
