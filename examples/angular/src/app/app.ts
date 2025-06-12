import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [UiLibraryAngularModule, Header, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  http = inject(HttpClient);

  leftSidebarOpen = signal(true);
  rightSidebarOpen = signal(false);
  tasks = toSignal(this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos'));
}

interface Task {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
}
