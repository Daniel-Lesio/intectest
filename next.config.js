module.exports = {
    images: {
      domains: ['images.pexels.com'],
    },
    webpack: (config, options) => {
      config.node = {
        fs: 'empty',
        path : 'empty'
      };
    },
  }