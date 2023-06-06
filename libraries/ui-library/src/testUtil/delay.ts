export const delay = (time: number) =>
  new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
