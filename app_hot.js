const webpack = require('webpack');
const Koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const config = require('./webpack.config.hot');
const proxyMiddleware = require('http-proxy-middleware');
const app = new Koa();
const compiler = webpack(config);
app.use(require('koa-webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true,
	stats: {
		colors: true,
	}
}));
app.use(require('koa-webpack-hot-middleware')(compiler));
app.use(serve(__dirname + '/page'));
app.use(router.routes());
app.listen(8888, function() {
	console.log('正常打开8888端口')
});

