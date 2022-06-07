import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { ParallaxDirective } from './directives/parallax.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ParallaxDirective, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
