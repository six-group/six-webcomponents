export const delay = (time) =>
  new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
