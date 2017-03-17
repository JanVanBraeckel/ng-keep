import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AuthGuard } from './auth.guard';
import { RedirectAuthGuard } from './redirect-auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { AboutComponent } from './about/about.component';
import { NoteCreatorComponent } from './note-creator/note-creator.component';
import { fireBaseConfig } from './firebaseconfig';

const fbConfig = fireBaseConfig;

const fbAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    AppBarComponent,
    NotesContainerComponent,
    NoteCardComponent,
    ColorPickerComponent,
    AboutComponent,
    NoteCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(fbConfig, fbAuthConfig),
  ],
  providers: [AuthGuard, RedirectAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
