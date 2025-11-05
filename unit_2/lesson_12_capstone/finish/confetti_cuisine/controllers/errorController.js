import httpStatus from "http-status-codes";

const pageNotFoundError = (req, res) => {
  const errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.render("error");
};

const internalServerError = (error, req, res, next) => {
  const errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.error(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is taking a nap!`);
};

export default { pageNotFoundError, internalServerError };
