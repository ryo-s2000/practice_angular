import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CoopModule } from './coop/coop.module'
import { AppComponent }  from './app.component';
import { DetailsComponent } from './coop/details.component';
import { EditComponent } from './coop/edit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DetailsComponent, EditComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
