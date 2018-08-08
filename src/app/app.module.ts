import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { EmailFormComponent } from './components/email-form/email-form.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'services',      component: ServicesComponent },
  { path: 'resources',      component: ResourcesComponent },
  { path: 'contactUs',      component: ContactUsComponent },
  { path: '',
    redirectTo: '/aboutUs',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ServicesComponent,
    ResourcesComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    EmailFormComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
