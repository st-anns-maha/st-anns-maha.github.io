import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OtherActivitiesComponent } from './other-activities/other-activities.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';

const routes: Routes = [
  { path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full', },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'other-activities', component: OtherActivitiesComponent },
      {
        path: '**', redirectTo: '/home'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
