import { DetailService } from './details/detail.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { SmallmenuComponent } from './smallmenu/smallmenu.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from './profile/pie-chart/pie-chart.component';
import { BarchartComponent } from './profile/barchart/barchart.component';
import { Card1Component } from './profile/card1/card1.component';
import { Card2Component } from './profile/card2/card2.component';
import { StatisticsTabComponent } from './profile/secondRowGrid/statistics-tab/statistics-tab.component';
import { FollowersComponent } from './profile/secondRowGrid/followers/followers.component';
import { ReviewsComponent } from './profile/secondRowGrid/reviews/reviews.component';
import { Chart1Component } from './profile/3rdRowGrid/chart1/chart1.component';
import { Chart2Component } from './profile/3rdRowGrid/chart2/chart2.component';
import { HighchartsChartModule } from 'highcharts-angular';
 // import { StatisticsTabComponent } from './secondRowGrid/statistics-tab/statistics-tab.component';
// import { ChartModule } from 'modules/chart.module';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ProfileComponent,
    SidebarComponent,
    SmallmenuComponent,
    Tab1Component,
    Tab2Component,
    PieChartComponent,
    BarchartComponent,
    Card1Component,
    Card2Component,
    StatisticsTabComponent,
    FollowersComponent,
    ReviewsComponent,
    Chart1Component,
    Chart2Component
     // StatisticsTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    HighchartsChartModule
  ],
  exports: [MatGridListModule],
  providers: [DetailService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
