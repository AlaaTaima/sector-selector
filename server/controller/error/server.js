
exports.serverError = (err, req, res, next) => {
    res
      .status(err.status || 500)
      .json({ msg: err.msg || 'Something went wrong, try again later' });
  };
  