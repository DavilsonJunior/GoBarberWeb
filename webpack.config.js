module.exports = {
  // resolve: {
  //   fallback: {
  //     timers: require.resolve('timers-browserify'),
  //   },
  // },
  resolve: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
    fallback: {
        timers: require.resolve('timers-browserify'),
    }
}
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader"
  //       }
  //     }
  //   ]
  // }
}
