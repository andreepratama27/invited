const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),

  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },

  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
};
