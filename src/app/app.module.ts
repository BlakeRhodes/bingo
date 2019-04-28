import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SquareComponent} from './square/square.component';
import {BingoComponent} from './bingo/bingo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {EditDialogComponent} from './edit-dialog/edit-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShuffleComponent } from './shuffle/shuffle.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BingoComponent,
    EditDialogComponent,
    ShuffleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent]
})
export class AppModule {
}
