import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailsComponent,
    TodoCreateComponent
  ],
  imports: [
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
