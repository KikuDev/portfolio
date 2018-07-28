import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreloadComponent } from './preload/preload.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { ViewsComponent } from './views/views.component';
import { ProComponent } from './pro/pro.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PersosComponent } from './persos/persos.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloadComponent,
    NavbarComponent,
    ViewsComponent,
    ProComponent,
    PresentationComponent,
    PersosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
