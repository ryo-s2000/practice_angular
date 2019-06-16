import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="line back" [class.fore]="flag">WINGSプロジェクト</div>`,
  styles: [`
  	.line { border: solid 1px #f00; }
  	.back { background-color: #0ff; }
  	.fore { color: red; }
  `]
})
export class AppComponent  {
	flag = true;
	clazz = 'fore';
}
