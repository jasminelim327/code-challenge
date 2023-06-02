var sum_to_n_a = function (n) {
  var total = 0;
  for (var i = 0; i < n; i++) {
    total += i;
  }
  console.log(total);
};

var sum_to_n_b = function (n) {
  while (n >= 0) {
    total += n;
    n--;
  }
};

var sum_to_n_c = function (n) {
  // recursive function
  while (n >= 0) {
    n + sum_to_n_c(n - 1);
  }
};
