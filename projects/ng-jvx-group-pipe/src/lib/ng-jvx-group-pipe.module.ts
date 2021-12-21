import {NgModule} from '@angular/core';
import {GroupByPipe} from './group-by.pipe';


@NgModule({
  declarations: [
    GroupByPipe
  ],
  imports: [],
  exports: [
    GroupByPipe
  ],
  providers: [GroupByPipe]
})
export class NgJvxGroupPipeModule {
}
