System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "paths": {
    "*": "*.js"
  },
  "bundles": {
    "build": [
      "src/double",
      "src/triple",
      "src/index",
    ]
  }
});

