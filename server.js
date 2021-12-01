const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');


const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();
app.use("*", createProxyMiddleware(
    { target: "http://localhost:8080", 
    ws: true ,
     changeOrigin: true,
     router: {
    'dev.localhost:3000': 'http://localhost:8080',
  },})) 
app.listen(process.env.PORT || 3000)