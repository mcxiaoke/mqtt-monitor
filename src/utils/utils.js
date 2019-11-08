function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
}

function isString(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
}

export { isIterable, isString };
