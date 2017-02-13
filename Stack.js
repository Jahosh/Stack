const Stack = function() {
  this._storage = new Map();
};

Stack.prototype.push = function(value) {
  let index = this._storage.size;
  this._storage.set(index, value);
};

Stack.prototype.peek = function() {
  let index = this._storage.size - 1;
  return this._storage.get(index);
};

Stack.prototype.pop = function() {
  let index = this._storage.size - 1;
  let value = this._storage.get(index);
  this._storage.delete(index);
  return value;
};

Stack.prototype.size = function() {
  return this._storage.size;
};

/****  Implementation */
const stack = new Stack();
stack.push(2017);
stack.push(2016);
stack.push(2015);
stack.push(2014);
stack.size() // 4
stack.pop() // 2014
stack.size() // 3
stack.peek() // 2015
