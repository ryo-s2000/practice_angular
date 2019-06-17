import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <form>
  	<label for="show">表示：非表示</label>
  	<input id="show" name="show" type="checkbox" [(ngModel)] = "show" />
  </form>
  <div *ngIf="show; else elseContent">
  	<p>hogehoge</p>
  </div>
  <ng-template #elseContent>
  	<h3 style="color:Red;">非表示中だよ</h3>
  </ng-template>
  `
})
export class AppComponent  {
	show = false;
}
