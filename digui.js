function digui(start) {
  if (start > 100) {
    return start;
  } else {
    return digui(start + 1);
  }
}

console.log(digui(1));
