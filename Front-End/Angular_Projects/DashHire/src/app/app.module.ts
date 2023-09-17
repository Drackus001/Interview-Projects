import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReportsComponent } from './modules/components/reports/reports.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ChartJsComponent } from './shared/components/chart-js/chart-js.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReportsComponent,
    SidebarComponent,
    ChartJsComponent,
  ],
  imports: [BrowserModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
