import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common-pages/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ComplianceComponent } from './components/compliance/compliance.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeaturesPageComponent } from './components/features-page/features-page.component';
import { HttpClientModule } from '@angular/common/http';
import { JoinComponent } from './components/join/join.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    ComplianceComponent,
    TeamComponent,
    ContactComponent,
    FeaturesPageComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
