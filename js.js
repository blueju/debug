let a = {
  i: 1,
  toString: function () {
    return this.i++;
  }
};

console.log(a == 1 && a == 2 && a == 3);
