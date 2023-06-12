import { EventEmitter } from '@stencil/core';

export const DEFAULT_DEBOUNCE_INSANELY_FAST = 35;
export const DEFAULT_DEBOUNCE_FAST = 300;

/**
 * Debounce function to implement a timeframe to wait for no new changes before executing a callback

 *  example usages:
 *    debounce(() => saveInput());
 *    debounce(() => saveInput(), 750);
 *    this.searchInput.addEventListener('six-input-input', debounce((event) => this.searchInputChange(event)));
 *
 *  regarding default timeout check https://lawsofux.com/doherty-threshold/
 *
 * @param callback
 * @param timeout
 */
export const debounce = <T>(callback: (x: T) => void, timeout = DEFAULT_DEBOUNCE_FAST) => {
  let timer: number;
  return (args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(args), timeout);
  };
};

/**
 * Debounce an event
 *
 * @param event
 * @param timeout
 */
export const debounceEvent = (event: EventEmitter, timeout: number): EventEmitter => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const original = (event as any)._original || event;
  const emit = debounce(original.emit.bind(original), timeout) as (_: unknown) => CustomEvent;
  return {
    _original: event,
    emit: emit,
  } as EventEmitter;
};
