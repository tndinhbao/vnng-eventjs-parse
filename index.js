module.exports = () => (ctx, next) => {
  ctx.content = JSON.parse(ctx.content.toString());
  next();
};

