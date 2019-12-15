import { NoteDetailsComponent } from '../note-details/note-details.component';
import { Observable } from "rxjs";
import { NoteService } from "../note.service";
import { Note } from "../note";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-note-list",
  templateUrl: "./note-list.component.html",
  styleUrls: ["./note-list.component.styl"]
})
export class NoteListComponent implements OnInit {
  note: Observable<Note[]>;

  constructor(private noteService: NoteService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
  console.log(this.noteService.getNotesList());
    this.note = this.noteService.getNotesList();
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  noteDetails(id: number){
    this.router.navigate(['details', id]);
  }
}