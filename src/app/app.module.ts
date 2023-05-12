import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SamplechartComponent } from './samplechart/samplechart.component';
import { SamplecomponentComponent } from './samplecomponent/samplecomponent.component';
import { SamplecomponentnewComponent } from './samplecomponentnew/samplecomponentnew.component';
import { PiechartComponent } from './piechart/piechart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ChartinsertComponent } from './chartinsert/chartinsert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    SamplechartComponent,
    SamplecomponentComponent,
    SamplecomponentnewComponent,
    PiechartComponent,
    LinechartComponent,
    AdminComponent,
    AdmindashboardComponent,
    ChartinsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
