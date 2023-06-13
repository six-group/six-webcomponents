import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(readonly http: HttpClient) {}

  fetchAll(): Observable<Task[]> {
    return this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
