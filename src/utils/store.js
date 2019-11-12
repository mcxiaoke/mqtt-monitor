export const storeSet = (key, obj) => {
  window.localStorage.setItem("mqtt_store_item_" + key, JSON.stringify(obj));
};

export const storeClear = () => {
  window.localStorage.clear();
};

export const storeGet = (key) => {
  let s = window.localStorage.getItem("mqtt_store_item_" + key);
  return s ? JSON.parse(s) : undefined;
};

export const storeDelete = (key) => {
  window.localStorage.removeItem("mqtt_store_item_" + key);
};

export const saveMessages = (host, messages) => {
  storeSet(host + "_messages", messages);
};

export const loadMessages = (host) => {
  return storeGet(host + "_messages") || [];
};

export const deleteMessages = (host) => {
  storeDelete(host + "_messages");
};
