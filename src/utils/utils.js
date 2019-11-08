export default {
  isIterable: function(obj) {
    // checks for null and undefined
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === "function";
  },

  isString: function(obj) {
    return Object.prototype.toString.call(obj) === "[object String]";
  }
};
