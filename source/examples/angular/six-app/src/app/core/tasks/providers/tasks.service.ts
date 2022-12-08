import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fetchDelay } from '~/app/utils/fetch-delay';

export interface Task {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
}

@Injectable()
export class TasksService {
  fetchAll(): Observable<Task[]> {
    return this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos').pipe(fetchDelay());
  }

  constructor(readonly http: HttpClient) {}
}
