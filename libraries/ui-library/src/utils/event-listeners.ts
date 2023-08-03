interface EventListener {
  el: GlobalEventHandlers;
  name: string;
  listener: EventListenerOrEventListenerObject;
  identifier?: string | null;
}

const equals =
  <A extends Object>(a: A) =>
  <B extends Object>(b: B) =>
    Object.keys(a).every((key) => a[key] === b[key]);

export class EventListeners {
  eventListeners: EventListener[] = [];

  add = <T extends GlobalEventHandlers>(
    el: T,
    name: string,
    listener: EventListenerOrEventListenerObject,
    identifier = null
  ) => {
    this.eventListeners.push({ el, name, listener, identifier });
    el.addEventListener(name, listener);
  };

  remove = <T extends GlobalEventHandlers>(el: T, name: string, listener: EventListenerOrEventListenerObject) => {
    const sameItem = equals({ el, name, listener });
    this.eventListeners = this.getFilteredEventListeners(sameItem);
  };

  removeByIdentifier = (identifier: string) => {
    const sameItem = (el) => el.identifier === identifier;
    const foundListener = this.eventListeners.find(sameItem) !== undefined;

    if (!foundListener) {
      return;
    }

    this.eventListeners = this.getFilteredEventListeners(sameItem);
  };

  private getFilteredEventListeners(sameItem: (el) => boolean) {
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
    while (this.eventListeners.length) {
      const { el, name, listener } = this.eventListeners.pop();
      el.removeEventListener(name, listener);
    }
  };
}
