import { NoteService } from '../note.service';
import { Note } from '../note';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.styl']
})
export class CreateNoteComponent implements OnInit {

  note: Note = new Note();
  submitted = false;

  constructor(private noteService: NoteService,
    private router: Router) { }

  ngOnInit() {
  }

  newNote(): void {
    this.submitted = false;
    this.note = new Note();
  }

  save() {
    this.noteService.createNote(this.note)
      .subscribe(data => console.log(data), error => console.log(error));
    this.note = new Note();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/notes']);
  }
}