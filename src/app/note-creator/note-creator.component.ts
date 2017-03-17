import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.scss']
})
export class NoteCreatorComponent {

  @Output()
  createNote = new EventEmitter();

  colors: string[] = ['#b19cd9', '#ff9691', '#77dd77', '#aec6cf', '#f49ac2', 'white'];

  newNote = {
    title: '',
    value: '',
    color: 'white'
  };

  fullForm = false;

  onCreateNote() {
    const { title, value, color } = this.newNote;
    if (title && value) {
      this.createNote.next({ title, value, color });
    }

    this.reset();
  }

  reset() {
    this.newNote = {
      title: '',
      value: '',
      color: 'white'
    };
    this.toggle(false);
  }

  toggle(value: boolean) {
    this.fullForm = value;
  }

  onColorSelect(color: string) {
    this.newNote.color = color;
  }

}
