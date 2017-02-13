const Stack = function() {
  this.storage = new Map();
};

Stack.prototype.push = function(value) {
  let index = this.storage.size;

  this.storage.set(index, value);
};

Stack.prototype.pop = function() {
  let index = this.storage.size - 1;
  let value = this.storage.get(index);
  this.storage.delete(index);
  return value;
};

Stack.prototype.size = function() {
  return this.storage.size;
};