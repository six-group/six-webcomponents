import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
// feature
import * as fromUI from '../store/ui';
import * as fromTasks from '../tasks/store';

@Injectable()
export class CoreFacade {
  dialog?: HTMLSixDialogElement;

  // UI
  leftSidebarOpen$ = this.store.select(fromUI.selectLeftSidebarOpen);
  rightSidebarOpen$ = this.store.select(fromUI.selectRightSidebarOpen);
  quickSearch$ = this.store.select(fromUI.selectQuickSearch);

  // tasks
  tasks$ = this.store.select(fromTasks.selectAll);
  tasksLoading$ = this.store.select(fromTasks.selectLoading);
  tasksCount$ = this.store.select(fromTasks.selectTotal);

  constructor(readonly store: Store, @Inject(DOCUMENT) readonly document: Document) {}

  setLeftSidebar = (leftSidebarOpen: boolean) => this.store.dispatch(fromUI.setLeftSidebar({ leftSidebarOpen }));

  toggleLeftSidebar = () => this.store.dispatch(fromUI.toggleLeftSidebar());

  toggleRightSidebar = () => this.store.dispatch(fromUI.toggleRightSidebar());

  setQuickSearch = (e: Event) => {
    const { detail } = e as Event & { detail: { value: string } };
    this.store.dispatch(fromUI.setQuickSearch({ quickSearch: detail.value }));
  };

  showJSON = (label: string, data: object) => {
    if (this.dialog) {
      const pre = this.dialog.querySelector('pre') as HTMLPreElement;
      this.dialog.setAttribute('label', label);
      pre.innerText = JSON.stringify(data, null, 2);
      void this.dialog.show();
    }
  };

  showEvent = (event: Event) => {
    const { detail } = event as CustomEvent;
    this.showJSON(event.type, detail);
  };

  closeDialog = () => {
    if (this.dialog) {
      void this.dialog.hide();
    }
  };
}
