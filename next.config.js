
module.exports ={
    pwa: {
        dest: 'public'
      },
    images: {
      domains: ['images.pexels.com','localhost/intecenergy','picsum.photos','139.59.159.33'],
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: 'empty'
          }
        }
    
        return config
    }
  }