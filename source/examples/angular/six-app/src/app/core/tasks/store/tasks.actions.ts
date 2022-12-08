import { createAction, props } from '@ngrx/store';
import { Task } from '../providers/tasks.service';

export const fetchAll = createAction('[Tasks] Fetch All');
export const fetchAllSuccess = createAction('[Tasks] Fetch All Success', props<{ tasks: Task[] }>());
export const failure = createAction('[Tasks] Failure', props<{ message: string }>());
