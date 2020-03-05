import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLocationComponent } from './admin/admin-location/admin-location.component';
import { AdminEventsComponent } from './admin/admin-events/admin-events.component';

import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { loaderConfig } from './preloader-config';
import { ContactInfoComponent } from './admin/contact-info/contact-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LocationComponent,
    AboutComponent,
    EventsComponent,
    ContactsComponent,
    AdminComponent,
    AdminLocationComponent,
    AdminEventsComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(loaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
