import { Component , EventEmitter, Input, Output} from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'edit-book',
  template: `
    <form #myForm="ngForm" (ngSubmit)="onsubmit()" *ngIf="item">
        <div>
            <label for="isbn">ISBN:コード</label><br />
            <span id="isbn">{{item.isbn}}</span>
        </div>

        <div>
            <label for="title">書名：</label>
            <input id="title" name="title" size="25" type="text" [(ngModel)]="item.title" />
        </div>

        <div>
            <input type="submit" value="編集" />
        </div>
    </form>
  `,
})
export class EditComponent {
  @Input() item: Book;
  @Output() edited = new EventEmitter<Book>();

  onsubmit() {
    this.edited.emit(this.item);
  }
}
