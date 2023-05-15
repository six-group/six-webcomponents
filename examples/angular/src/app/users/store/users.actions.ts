import { createAction, props } from '@ngrx/store';
import { User } from '../providers/users.service';

export const fetchAll = createAction('[Users] Fetch All');
export const fetchAllSuccess = createAction('[Users] Fetch All Success', props<{ users: User[] }>());
export const failure = createAction('[Users] Failure', props<{ message: string }>());
export const openDrawer = createAction('[Users] Open Drawer');
export const closeDrawer = createAction('[Users] Close Drawer');
export const selectUser = createAction('[Users] Select User', props<{ id: string }>());
