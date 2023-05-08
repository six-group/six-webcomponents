import { createAction, props } from '@ngrx/store';

export const setLeftSidebar = createAction('[Root] Set Left Sidebar', props<{ leftSidebarOpen: boolean }>());

export const toggleLeftSidebar = createAction('[Root] Toggle Left Sidebar');
export const toggleRightSidebar = createAction('[Root] Toggle Right Sidebar');

export const setQuickSearch = createAction('[UI] Set Quick Search', props<{ quickSearch: string }>());
