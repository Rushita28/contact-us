import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';


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
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
import { TwitterFeedComponent } from './components/home/twitter-feed/twitter-feed.component';
import { CarouselSectionComponent } from './components/home/carousel-section/carousel-section.component';
import { JumboHeadingComponent } from './components/home/jumbo-heading/jumbo-heading.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'services',      component: ServicesComponent },
  { path: 'resources',      component: ResourcesComponent },
  { path: 'contactUs',      component: ContactUsComponent },
  { path: '',
    redirectTo: '/home',
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
    EmailFormComponent,
    HomeComponent, 
	AboutComponent,
	TwitterFeedComponent,
	CarouselSectionComponent,
	JumboHeadingComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
	NgxTwitterTimelineModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
