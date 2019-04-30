import { Component, OnInit,Inject ,Output,EventEmitter} from '@angular/core';
import { TaskModel} from './../tasks';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatSnackBar} from '@angular/material';
import { TasksService } from './../Service/tasks.service'; 
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  @Output() AddTaskEvent = new EventEmitter<boolean>();
  title:string;
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(TaskOpendialog, {
      width: '250px',
      data: {title: this.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.AddTaskEvent.emit(true);
      }
      console.log('The dialog was closed');
      
    });
  }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-task-model',
  templateUrl: 'task.model.component.html',
})
export class TaskOpendialog {
  message:any;
  constructor(
    public dialogRef: MatDialogRef<TaskOpendialog>,
    @Inject(MAT_DIALOG_DATA) public data: TaskModel, public tasksServices: TasksService,public snackbar: MatSnackBar) {}
    
  onNoClick(): void {
    this.dialogRef.close();
  }
 onAddTask(task:any){
   this.tasksServices.AddTask(task).subscribe(message=>{
    this.snackbar.open(message.message,"Dismiss",{
      duration:2000
    });
    this.dialogRef.close(true);
   });
 }
}
