/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let cache = [];
  cache[0] = 0;
  cache[1] = 1;
  for (let i = 2; i <= N; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[cache.length - 1];
};
