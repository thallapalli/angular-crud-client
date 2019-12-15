import { Note } from '../note';
import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note.service';
import { NoteListComponent } from '../note-list/note-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.styl']
})
export class NoteDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['notes']);
  }
}