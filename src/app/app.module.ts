import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {OlapComponent} from './olap.component';
import {TransferHttpCacheModule} from '@nguniversal/common';

import { DxPivotGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    OlapComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'olap-app'}),
    RouterModule.forRoot([
      { path: '', component: OlapComponent, pathMatch: 'full'},
    ]),
    TransferHttpCacheModule,
    DxPivotGridModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [OlapComponent]
})
export class AppModule { }
