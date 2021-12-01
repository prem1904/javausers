const path = require('path');
module.exports = {
    entry: './src/index.js',
    mode: 'production',
    devServer: {
        client: {
            reconnect: true,
          },
        proxy: {
            '/userManagements/*': {
              target: 'https://desolate-retreat-47606.herokuapp.com/',
              secure: false,
              changeOrigin: true,
              pathRewrite: { '^/userManagements': 'https://desolate-retreat-47606.herokuapp.com/userManagements' },
            
            }, 
            '/assetManagements/*': {
                target: 'https://desolate-retreat-47606.herokuapp.com',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                  "^/assetManagements": 'https://desolate-retreat-47606.herokuapp.com/assetManagements'
                }
            },
            '/support/*': {
                target: 'https://desolate-retreat-47606.herokuapp.com',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                  '^/support': 'https://desolate-retreat-47606.herokuapp.com/support'
                }
              },
              '/asset/*': {
                target: 'https://desolate-retreat-47606.herokuapp.com',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                  '^/asset': 'https://desolate-retreat-47606.herokuapp.com/asset'
                }
              },
            
          },
        port:8080,
        static: {
            directory: path.join(__dirname, '/dist/review-dashboard'),
         },
    },
  };