const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./src/app.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  }
};
