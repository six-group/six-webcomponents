let state = {
  elements: {},
};

window.run = (components) => {
  const camelToKebapCase = (str) => str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

  const elements = Object.entries(components).reduce((acc, [key, component]) => {
    const selector = camelToKebapCase(key);
    const el = document.getElementById(selector);
    const updated = { ...acc, [key]: el };
    component(updated);
    return updated;
  }, state.elements);

  if (Object.keys(state.elements).length === 0) {
    state.elements = elements;
  }
};

run({
  leftSidebar: () => {},
  templateTask: () => {},
  rightSidebar: ({ rightSidebar, templateTask }) => {
    const tasks = Array.from({ length: 99 }, () => {
      const task = templateTask.content.cloneNode(true);
      return task;
    });
    tasks.forEach((task) => {
      rightSidebar.appendChild(task);
    });
  },
  header: ({ header, leftSidebar }) => {
    header.addEventListener('six-header-hamburger-menu-clicked', () => {
      leftSidebar.toggleAttribute('open');
    });
  },
  headerButtonToggleRightSidebar: ({ headerButtonToggleRightSidebar, rightSidebar }) => {
    headerButtonToggleRightSidebar.addEventListener('click', () => {
      rightSidebar.toggleAttribute('open');
    });
  },
});

const load = (url) => {
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      document.querySelector('[router-outlet]').innerHTML = html;
      document
        .querySelector('[router-outlet]')
        .querySelectorAll('[script-outlet]')
        .forEach((script) => {
          const prev = document.querySelector('[script-outlet]');
          if (prev.parentNode === document.body) {
            document.body.removeChild(prev);
          }
          const outlet = document.createElement('script');
          Array.from(script.attributes).forEach(({ name, value }) => outlet.setAttribute(name, value));
          outlet.innerHTML = script.innerHTML;
          document.body.appendChild(outlet);
        });
    });
};

const routes = {
  '/dashboard': () => load('./dashboard.html'),
  '/users': () => load('./users.html'),
  '**': () => {
    history.pushState(null, null, '/dashboard');
    router();
  },
};

const router = () => {
  const { pathname } = location;
  const callback = routes[pathname] || routes['**'];
  callback();
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[router-link]').forEach((routerLink) => {
    window.addEventListener('popstate', router);
    routerLink.onclick = () => {
      const url = routerLink.getAttribute('router-link');
      history.pushState(null, null, url);
      router();
    };
  });
  router();
});
