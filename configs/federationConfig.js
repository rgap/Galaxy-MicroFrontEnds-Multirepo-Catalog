const { dependencies } = require("../package.json");

module.exports = {
  name: "catalog",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App",
    "./ProductList": "./src/components/ProductList",
    "./ProductDetails": "./src/components/ProductDetails",
  },
  remotes: {
    cart: "cart@http://localhost:3002/remoteEntry.js",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
      eager: true,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
      eager: true,
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: dependencies["react-router-dom"],
      eager: true,
    },
    "mfe-common-components": {
      singleton: true,
      requiredVersion: dependencies["mfe-common-components"],
      eager: true,
    },
  },
};
