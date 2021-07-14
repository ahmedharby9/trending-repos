import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {ReposModule} from "./pages/repos/repos.module";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpConfigInterceptor} from "./shared/interceptors/http-config.interceptor";
import { DateAgoPipePipe } from './shared/pipes/date-ago-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ReposModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
