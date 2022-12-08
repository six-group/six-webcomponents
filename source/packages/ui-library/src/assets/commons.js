const getRows = () => fetch('../assets/data.json').then((res) => res.json());

const getElements = (e) => Object.entries(e).reduce((e, [r, t]) => ({ ...e, [r]: document.querySelector(t) }), {});

const delay = (ms = 3000) => new Promise((resolve) => setTimeout(resolve, ms));
