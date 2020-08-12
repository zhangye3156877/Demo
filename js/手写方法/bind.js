Function.prototype.bind_ = function(ctx){
  const ctx_ = ctx || window;
  const fn = this;

  return function(...rest) {
    fn.call(ctx_, ...rest)
  };
}