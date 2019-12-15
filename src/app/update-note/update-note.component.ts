import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.styl']
})
export class UpdateNoteComponent implements OnInit {

  id: number;
  note: Note;

  constructor(private route: ActivatedRoute,private router: Router,
    private noteService: NoteService) { }

  ngOnInit() {
    this.note = new Note();

    this.id = this.route.snapshot.params['id'];
    
    this.noteService.getNote(this.id)
      .subscribe(data => {
        console.log(data)
        this.note = data;
      }, error => console.log(error));
  }

  updateNote() {
    this.noteService.updateNote(this.id, this.note)
      .subscribe(data => console.log(data), error => console.log(error));
    this.note = new Note();
    this.gotoList();
  }

  onSubmit() {
    this.updateNote();    
  }

  gotoList() {
    this.router.navigate(['/notes']);
  }
}