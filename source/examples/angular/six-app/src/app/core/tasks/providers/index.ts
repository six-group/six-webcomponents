import { TasksGuard } from './tasks.guard';
import { TasksService } from './tasks.service';

export const providers = [TasksGuard, TasksService];
