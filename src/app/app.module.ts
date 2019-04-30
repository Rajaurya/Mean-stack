import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksComponent } from './tasks/tasks.component';
import { MatTableModule,MatPaginatorModule,MatSlideToggleModule,MatSnackBarModule,MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, MatSortModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { TasksService} from './Service/tasks.service';
import { TaskAddComponent, TaskOpendialog } from './tasks/task-add.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskAddComponent,
    TaskOpendialog
  ],
  entryComponents:[TaskOpendialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSortModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
