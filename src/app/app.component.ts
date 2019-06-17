import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
  	<li>{{current | date }}</li>
  	<li>{{current | date : "medium" }}</li>
  	<li>{{current | date : "y MM dd (EEE) "}}</li>
  </ul>
  `
})
export class AppComponent  {
	current = new Date()
}
