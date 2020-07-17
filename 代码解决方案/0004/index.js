const blueLocalStorage = (function () {
  let store = {};
  return {
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    getItem: function (key) {
      return store[key];
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

blueLocalStorage.setItem("test", "test");
console.log(blueLocalStorage.getItem("test"));
