var sum_to_n_a = function (n) {
  var total = 0;
  for (var i = 0; i <= n; i++) {
    total += i;
  }
  return(total);
};

var sum_to_n_b = function (n) {
  var total = 0;
  while (n >= 0) {
    total += n;
    n--;
  }

  return total;
};

var sum_to_n_c = function (n) {
  // recursive function
  if (n === 0) {
    return 0;
  } else {
    return n + sum_to_n_c(n - 1);
  }
};
