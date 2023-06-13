interface EventListener {
  el: DocumentAndElementEventHandlers;
  name: string;
  listener: EventListenerOrEventListenerObject;
  identifier?: string | null;
}

export class EventListeners {
  eventListeners: EventListener[] = [];

  add = <T extends DocumentAndElementEventHandlers>(
    el: T,
    name: string,
    listener: EventListenerOrEventListenerObject,
    identifier: string | null | undefined = null
  ) => {
    this.eventListeners.push({ el, name, listener, identifier });
    el.addEventListener(name, listener);
  };

  remove = <T extends DocumentAndElementEventHandlers>(
    el: T,
    name: string,
    listener: EventListenerOrEventListenerObject
  ) => {
    this.eventListeners = this.getFilteredEventListeners(
      (eventListener: EventListener) =>
        eventListener.listener == listener && eventListener.el === el && eventListener.name === name
    );
  };

  removeByIdentifier = (identifier: string) => {
    const sameItem = (el: EventListener) => el.identifier === identifier;
    const foundListener = this.eventListeners.find(sameItem) !== undefined;
    if (!foundListener) {
      return;
    }
    this.eventListeners = this.getFilteredEventListeners(sameItem);
  };

  private getFilteredEventListeners(sameItem: (el: EventListener) => boolean) {
    return this.eventListeners.filter((item) => {
      if (sameItem(item)) {
        item.el.removeEventListener(item.name, item.listener);
        return false;
      } else {
        return true;
      }
    });
  }

  removeAll = () => {
    while (this.eventListeners.length > 0) {
      const eventListener: EventListener | undefined = this.eventListeners.pop();
      if (eventListener != null) {
        eventListener.el.removeEventListener(eventListener.name, eventListener.listener);
      }
    }
  };

  forward(from: string, to: 'input' | 'change' | 'blur' | 'focus', host: HTMLElement) {
    switch (to) {
      case 'input':
        this.add(host, from, () => host.dispatchEvent(new InputEvent(to, { bubbles: true, cancelable: true })));
        break;
      case 'change':
        this.add(host, from, () => host.dispatchEvent(new InputEvent(to, { bubbles: true, cancelable: true })));
        break;
      case 'blur':
        this.add(host, from, () => host.dispatchEvent(new FocusEvent(to, { bubbles: true, cancelable: true })));
        break;
      case 'focus':
        this.add(host, from, () => host.dispatchEvent(new FocusEvent(to, { bubbles: true, cancelable: true })));
        break;
    }
  }
}
