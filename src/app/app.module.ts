import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SocialpostsComponent } from './components/socialposts/socialposts.component';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import { PostformComponent } from './components/postform/postform.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialpostsComponent,
    SinglepostComponent,
    PostformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
