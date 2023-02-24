module.exports = {
    globDirectory: 'build/',
    globPatterns: [
      '**/*.{json,js,css,html}',
      'images/**/*.{png,jpg,svg,gif}',
    ],
    swDest: 'build/sw.js',
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 10,
          },
        },
      },
    ],
  };
  