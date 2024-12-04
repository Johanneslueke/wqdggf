import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IxModule } from '@siemens/ix-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import PaneLayout from './../pane-layout';


@NgModule({
  declarations: [AppComponent, PaneLayout, ],
  imports: [
    BrowserModule,
    IxModule.forRoot(),
    AgGridModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}