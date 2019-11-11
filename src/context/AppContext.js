import React from "react";

export default React.createContext({
  isConnected: false,
  options: {},
  topics: new Set()
});
