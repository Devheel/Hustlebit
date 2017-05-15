import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material.module';
import 'hammerjs';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './modules/app.router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { BackendMockingService } from 'app/backend-service/backend-mocking.service';
import { ExceptionService } from './core/exception.service';
import { ToastService } from 'app/core/toast.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStoreService } from '../api/in-memory-store.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    SearchComponent,
    ProfileComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryStoreService),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [BackendMockingService, ExceptionService, ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
