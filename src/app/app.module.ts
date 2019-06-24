import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ParentComponent }  from './parent.component';
import { CoopModule } from './coop/coop.module'
import { ChildComponent }  from './child.component';
import { DetailsComponent } from './coop/details.component';
import { EditComponent } from './coop/edit.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ParentComponent, ChildComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
