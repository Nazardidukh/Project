import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLocationComponent } from './admin/admin-location/admin-location.component';
import { AdminEventsComponent } from './admin/admin-events/admin-events.component';
import { ContactInfoComponent } from './admin/contact-info/contact-info.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'location', component: LocationComponent},
  {path: 'about', component: AboutComponent},
  {path: 'events', component: EventsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'admin', component: AdminComponent, children: [
    {path: '', redirectTo: 'locations', pathMatch: 'full' },
    {path: 'locations', component: AdminLocationComponent},
    {path: 'event', component: AdminEventsComponent},
    {path: 'info', component: ContactInfoComponent},

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
