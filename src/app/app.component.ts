import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <span *ngFor="let b of books">
        ［<a href="#" (click)="onclick(b)">{{b.title}}</a>］
      </span>
    </div>
    <hr />
    <p>編集中：{{ edit.item?.title }}</p>
    <edit-book #edit [item]="selected" (edit)="onedited($event)"></edit-book>
  `,
})
export class AppComponent {
  selected: Book;

  books: Book[] = [
    {
      isbn: '978-4-7741-8411-1',
      title: '改訂新版JavaScript本格入門',
    },
    {
      isbn: '978-4-7980-4853-6',
      title: 'はじめてのAndroidアプリ開発 第2版',
    },
    {
      isbn: '978-4-7741-8030-4',
      title: '［改訂新版］Javaポケットリファレンス',
    },
    {
      isbn: '978-4-7981-3547-2',
      title: '独習PHP 第3版',
    },        
    {
      isbn: '978-4-8222-9893-7',
      title: '基礎からしっかり学ぶC++の教科書',
    }
  ];

  onclick(book: Book) {
    this.selected = {
      isbn: book.isbn,
      title: book.title
    };
  }

  onedited(book: Book){
    for(let item of this.books){
      if(item.isbn === book.isbn){
        item.title = book.title;
      }
    }
    this.selected = null;
  }
}
