import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <my-parent>
      <my-child></my-child>
    </my-parent>
  `,
  styles: [`
    div{
      font-size: 150%;
      text-decoration: underline;
      color: #369;
    }
  `]
})
export class AppComponent{
}
