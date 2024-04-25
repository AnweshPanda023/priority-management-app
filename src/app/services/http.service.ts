import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string = 'http://localhost:3000/tasks';

  constructor(private httpClient: HttpClient) {}

  addTask(task: string) {
    return this.httpClient.post('http://localhost:3000/tasks', {
      title: task,
    });
  }
  getAllTasks() {
    return this.httpClient.get('http://localhost:3000/tasks');
  }
  updateTask(task: any) {
    return this.httpClient.put('http://localhost:3000/tasks/' + task.id, task);
  }
  deleteTask(id: any) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
