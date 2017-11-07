var SortedList = function() {
  this.length = 0;
  this.list = [];
};

SortedList.prototype.add = function(item) {
  this.list.push(item);
  this.list.sort((numberA, numberB) => {
    return numberA - numberB;
  });
  this.length = this.list.length;
};

SortedList.prototype.get = function(pos) {
  return this.list[pos - 1];
};

SortedList.prototype.max = function() {
  if (this.list.length === 0) {
    throw new Error('EmptySortedList');
  }

  var maxNumber =
    this.list.reduce(
      (maxSoFar, number) => {
        return Math.max(maxSoFar, number);
      });
  return maxNumber;
};

SortedList.prototype.min = function() {
  if (this.list.length === 0) {
    throw new Error('EmptySortedList');
  }

  var minNumber =
    this.list.reduce((minSoFar, number) => {
      return Math.min(minSoFar, number);
    });
  return minNumber;
};
SortedList.prototype.average = function() {
  return this.sum() / this.list.length;
};
SortedList.prototype.sum = function() {
  var total =
    this.list.reduce(
      function (sum, x) {
        return sum + x;
      },
      0
    );
  return total;
};

module.exports = SortedList;
