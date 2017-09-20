const Koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const app = new Koa();
router.post('/upload',async function (ctx, next) {})
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
app.use(serve(__dirname + '/page'));
app.use(router.routes());
app.listen(3000);