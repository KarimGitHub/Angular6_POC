import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { SearchListComponent } from './list/search-list/search-list.component';
import { InputTextComponent } from './header/input-text/input-text.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    SearchListComponent,
    InputTextComponent,
    DashboardComponent,
    CoursedetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
