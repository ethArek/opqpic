function errCatcher(err) {
  let status = 500,
    errMessage = "";
  if (typeof err === "object") {
  } else if (!err) {
    err = {};
  } else if (typeof err === "string") {
    err = {
      message: err
    };
  }

  if (err.message === "User not found") {
    status = 404;
  } else {
    errMessage = "Internal server error";
  }
  return {
    errMessage: errMessage || err.message,
    status
  };
}

function createErrorResponse(res, err) {
  const { errMessage, status } = errCatcher(err);
  res.status(status).json({
    error: errMessage
  });
}

module.exports = createErrorResponse;
