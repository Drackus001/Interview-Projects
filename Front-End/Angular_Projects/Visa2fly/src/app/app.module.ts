import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { TeamComponent } from './team/team.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './footer/contact/contact.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    TeamComponent,
    ProductComponent,
    ContactComponent,
    NewsletterComponent,
    CopyrightComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
