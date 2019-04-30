import {TaskModel} from './../tasks';
import {TasksService} from './../Service/tasks.service';
import {Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource,MatSnackBar,MatSort} from '@angular/material';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayedColumns: string[] = ['_id','title', 'isCompleted', 'created_at', 'updated_at', 'action'];
  dataSource :MatTableDataSource<TaskModel>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  message:any;
  constructor(private taskService:TasksService,public snackbar:MatSnackBar) { }

  ngOnInit() { 
   
    this. AlltasksList(); }

  AlltasksList(){
    this.taskService.Tasks.subscribe(tasks =>{
      if(!tasks){return;}
      this.dataSource = new MatTableDataSource<TaskModel>(tasks);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }
  updateTask(task: any){
    this.taskService
    .changeStatus(task)
    .subscribe(message=>{
      this.snackbar.open(message.message,"Dismiss",{
        duration:2000
      })
    })
  }
  deleteTask(id){
    const check = confirm('Yes I Am Sure');
    if(check === true){
      return this.taskService.delTask(id)
    .subscribe(message=>{
      this.snackbar.open(message.message,"Dismiss",{
        duration:2000
      })
      this.AlltasksList()
    })
    }
    return;
  }
  TaskAdded(e: boolean){
    if(e===true){
this. AlltasksList()
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


