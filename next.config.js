const { promises } = require("fs")

module.exports = {
    images: {
      domains: ['images.pexels.com'],
    },
    webpack: (config, options) => {
      config.node = {
        'fs/promises': 'empty',
        path : 'empty'
      };
    },
  }