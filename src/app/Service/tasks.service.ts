import {HttpClient} from '@angular/common/http';
import {TaskModel} from './../tasks';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http:HttpClient) { }
  get Tasks(): Observable<TaskModel[]>{
    return this. _http.get<TaskModel[]>('http://localhost:7008/api/task');
  }
  changeStatus(task: TaskModel):Observable<any>{
   task.isCompleted = task.isCompleted === true ? false:true;
   console.log(task) ;
   return this._http.put<any>(
     `http://localhost:7008/api/task/${task._id}`,
    task
    );
  }
  AddTask(task:TaskModel):Observable<any>{
    return this._http.post('http://localhost:7008/api/task',task)
  }
  delTask(id):Observable<any>{
    return this._http.delete(`http://localhost:7008/api/task/${id}`)
  }
}

