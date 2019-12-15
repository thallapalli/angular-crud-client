import { NoteDetailsComponent } from './note-details/note-details.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { UpdateNoteComponent } from './update-note/update-note.component';

const routes: Routes = [
  { path: '', redirectTo: 'note', pathMatch: 'full' },
  { path: 'notes', component: NoteListComponent },
  { path: 'add', component: CreateNoteComponent },
  { path: 'update/:id', component: UpdateNoteComponent },
  { path: 'details/:id', component: NoteDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }