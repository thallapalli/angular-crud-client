import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NoteListComponent } from './note-list/note-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateNoteComponent } from './update-note/update-note.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    NoteDetailsComponent,
    NoteListComponent,
    UpdateNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }