import { createAction, props } from '@ngrx/store';
import { FilterModel, SortModel } from '@six-group/ui-library/dist/types/components/six-table/types';
import { User } from '../providers/users.service';

export const fetchAll = createAction('[Users] Fetch All');
export const fetchAllSuccess = createAction('[Users] Fetch All Success', props<{ users: User[] }>());
export const failure = createAction('[Users] Failure', props<{ message: string }>());
export const updateSort = createAction('[Users] Update Sort', props<{ sort: SortModel<User> }>());
export const updateFilter = createAction('[Users] Update Filter', props<{ filter: FilterModel<User> }>());
export const toggleTableType = createAction('[Users] Toggle Table Type');
export const openDrawer = createAction('[Users] Open Drawer');
export const closeDrawer = createAction('[Users] Close Drawer');
export const selectUser = createAction('[Users] Select User', props<{ id: string }>());
