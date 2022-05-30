import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { About } from './controller/about.component';
import { Services } from './controller/services.component';
import { Contact } from './controller/contact.component';
import { NavComponent } from './controller/nav.component';
import { FooterComponent } from './controller/footer.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, NavComponent,FooterComponent, About, Services, Contact],
  bootstrap: [AppComponent],
})
export class AppModule {}
