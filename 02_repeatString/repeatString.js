const repeatString = function(string, num) {
  if (num < 0) {
    return 'ERROR'
  } else {
    const repetition = [];
    for (let i = 0; i < num; i++) {
      repetition.push(string)
    }
    return repetition.join("")
  }
};

// Do not edit below this line
module.exports = repeatString;
