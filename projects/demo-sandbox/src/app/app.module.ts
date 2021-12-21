import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgJvxGroupPipeModule} from 'ng-jvx-group-pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgJvxGroupPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
