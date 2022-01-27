import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';

@NgModule({
  imports: [BrowserModule, FormsModule, StoreModule.forRoot({
    counter:counterReducer
  })],
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    CounterButtonsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
