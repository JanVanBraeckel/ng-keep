import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {

  notes: FirebaseListObservable<any[]>;
  user: FirebaseAuthState;

  constructor(
    private _angularFire: AngularFire
  ) { }

  ngOnInit() {
    this._angularFire.auth.subscribe(user => {
      if (user) {
        this.user = user;
        this.notes = this._angularFire.database.list(`/users/${user.uid}/items`);
      }
    });
  }

  onNoteChecked(note) {
    this._angularFire.database.object(`/users/${this.user.uid}/items/${note.$key}`).remove();
  }

  onCreateNote(note) {
    this._angularFire.database.list(`/users/${this.user.uid}/items`).push(note);
  }

}
