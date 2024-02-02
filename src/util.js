import React from "react";
import Fill from "./Fill";

window.plugins = [];
window.components = {};
window.react = React;
window.components.Fill = Fill;

export const getPlugins = (type) => {
  return window.plugins.filter(({type: pType}) => pType === type).map(({plugin}) => plugin);
}