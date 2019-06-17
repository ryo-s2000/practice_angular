import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <select name="season" [(ngModel)]="season">
  	<option value="">選択してください。</option>
  	<option value="spring">春</option>
  	<option value="summer">夏</option>
  	<option value="autumn">秋</option>
  	<option value="winter">冬</option>
  </select>
  <div [ngSwitch]="season">
  	<span *ngSwitchCase="'spring'">トレッキング</span>
  	<span *ngSwitchCase="'summer'">海</span>
  	<span *ngSwitchCase="'autumn'">紅葉狩り</span>
  	<span *ngSwitchCase="'winter'">スキー</span>
  	<span *ngSwitchDeafault>選択して</span>
  </div>
  `
})
export class AppComponent  {
	season = '';
}
