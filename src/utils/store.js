export default {
  storeSet: function(key, obj) {
    window.localStorage.setItem("mqtt_store_item_" + key, JSON.stringify(obj));
  },
  storeGet: function(key) {
    let s = window.localStorage.getItem("mqtt_store_item_" + key);
    return s ? JSON.parse(s) : undefined;
  }
};
