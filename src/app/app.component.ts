import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <my-content>
      <span class="header">参加せえへん？</span>
      <span class="attention">メンバー募集中</span>
      <small>連絡先：hogehoge@gmail.com</small>
    </my-content>
  `,
})
export class AppComponent{
}
