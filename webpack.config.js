const path = require('path');
module.exports = {
    entry:'./src/index.js',
    mode: 'development',
    compress: true,
    public: 'floating-depths-26439.herokuapp.com',
    devServer: {
      static: {
        directory: path.join(__dirname, '/dist/review-dashboard'),
      },
      port: 8081,
      proxy: {
        '/userManagements/*': {
          target: 'https://desolate-retreat-47606.herokuapp.com',
          changeOrigin:true,
          secure:false,
          pathRewrite: { '^/userManagements': 'https://desolate-retreat-47606.herokuapp.com/userManagements' },
        }, 
        '/asset/*': {
            target: 'https://desolate-retreat-47606.herokuapp.com',
            changeOrigin:true,
            secure:false,
            pathRewrite: { '^/asset': 'https://desolate-retreat-47606.herokuapp.com/asset' },
          },
          '/support/*': {
            target: 'https://desolate-retreat-47606.herokuapp.com',
            changeOrigin:true,
            secure:false,
            pathRewrite: { '^/asset': 'https://desolate-retreat-47606.herokuapp.com/support' },
          },
          '/assetManagements/*': {
            target: 'https://desolate-retreat-47606.herokuapp.com',
            changeOrigin:true,
            secure:false,
            pathRewrite: { '^/asset': 'https://desolate-retreat-47606.herokuapp.com/assetManagements' },
          },
      },
    },
   
  };