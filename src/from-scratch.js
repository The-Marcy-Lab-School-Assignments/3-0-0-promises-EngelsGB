const resolvedWrapper = (num) => {
  return Promise.resolve(num);
};

const rejectedWrapper = (msg) => {
  return Promise.reject(new Error(msg));
};

const handleResolvedPromise = (promise) => {
  return promise
    .then((val) => {
      console.log(val);
      return val;
    });
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise
    .then((val) => {
      console.log(val);
      return val;
    })
    .catch((err) => {
      console.error(`Your error message was: ${err.message}`);
      return null;
    })
};

const pauseForMs = (timer) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timer);
  });
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
