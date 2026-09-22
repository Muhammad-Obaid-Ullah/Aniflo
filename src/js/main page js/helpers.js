import { TIMEOUT_SEC } from "./config";

// THIS FUNCTION WILL TAKE SECONDS AND DELAY THE CODE EXECUTION FOR THAT SECONDS
export const delay = function (s) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve();
    }, s * 1000);
  });
};

//THIS IS A TIME OUT FUNCTION
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} second(s)`));
    }, s * 1000);
  });
};

// ALL THE AJAX CALLS WILL BE MADE BY THIS FUNCTION
export const AJAX = async function (urls) {
  try {
    let data = [];

    if (Array.isArray(urls)) {
      for (let i = 0; i < urls.length; i++) {
        const response = await Promise.race([
          fetch(urls[i]),
          timeout(TIMEOUT_SEC),
        ]);
        const res = await response.json();

        if (!response.ok) throw new Error("Some Unknown error occured!!!!");

        data.push(res);
      }
    } else {
      const response = await Promise.race([fetch(urls), timeout(TIMEOUT_SEC)]);
      const res = await response.json();

      if (!response.ok) throw new Error("Some Unknown error occured!!!!");

      data.push(res);
    }

    return data;
  } catch (err) {
    throw err;
  }
};
