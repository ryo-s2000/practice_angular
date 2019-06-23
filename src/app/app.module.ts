import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { DetailsComponent } from './details.component';
import { EditComponent } from './edit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DetailsComponent, EditComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
