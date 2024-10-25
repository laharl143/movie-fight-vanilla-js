//this is the pattern where the delay of API calls happen
//Debouncing pattern helps avoid excessive API calls when users are typing continuously
const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };