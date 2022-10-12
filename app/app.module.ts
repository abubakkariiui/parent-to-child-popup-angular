import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './data.service';

import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
  ],
  declarations: [AppComponent, ParentComponent, ChildComponent],
  bootstrap: [AppComponent],
  providers: [DataService],
})
export class AppModule {}
