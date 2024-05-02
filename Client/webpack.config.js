const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    fallback: {
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      url: require.resolve("url/"),
      zlib: require.resolve("browserify-zlib"),
      stream: require.resolve("stream-browserify"),
      assert: require.resolve("assert/"),
    },
  },
};
