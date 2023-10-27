const sumAll = function(min, max) {
  let sum = 0;
  if (min < 0 || max < 0 || typeof(min) != "number" || typeof(max) != "number") {
    return "ERROR"
  } else {
    if (min > max) {
      for (let i= max; i <= min; i++) {
        sum += i
      }
    } else {
      for (let i= min; i <= max; i++) {
        sum += i
      }
    }
    return sum

  }
};

// Do not edit below this line
module.exports = sumAll;

// arg1 et arg2
// return sum = arg1 + arg + arg2
