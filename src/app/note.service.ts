import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl = 'http://ktcrud-app-dev.ca-central-1.elasticbeanstalk.com';

  constructor(private http: HttpClient) { }

  getNote(id: number): Observable<any> {
    return this.http.get('${this.baseUrl}/${id}');
  }

  createNote(note: Object): Observable<Object> {
    return this.http.post(this.baseUrl+'/createnote', note);
  }

  updateNote(id: number, value: any): Observable<Object> {
    return this.http.put('${this.baseUrl}/${id}', value);
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete('${this.baseUrl}/${id}', { responseType: 'text' });
  }

  getNotesList(): Observable<any> {
     //console.log(this.baseUrl);
     //this.http.get(this.baseUrl).subscribe(responseData => console.log(responseData));
    //return this.http.get('${this.baseUrl}');
   return this.http.get(this.baseUrl+'/retrievenotes');
  }
}