export const isIterable = function(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
};

export const isString = function(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
};

export default {
  isIterable,
  isString
};
