import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <input #txt id="txt" name="txt" type="text" (keyup.enter)="show(txt.value)" />
  <ul [innerHTML]="msg"></ul>

  <label>苗字：<input  #last  type="text" (change)="0" /></label><br />
  <label>名前：<input  #first type="text" (change)="0" /></label>
  <div>こんにちは、{{last.value}}{{first.value}}さん！</div>
  `
})
export class AppComponent  {
	msg = '';

	show(input: any){
		this.msg += `<li>${input}</li>`;
	}
}
