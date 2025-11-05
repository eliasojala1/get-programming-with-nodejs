import httpStatus from "http-status-codes";

export const pageNotFoundError = (req, res) => {
  res.status(httpStatus.NOT_FOUND);
  res.render("error");
};

export const internalServerError = (error, req, res, next) => {
  console.error(error.stack);
  res.status(httpStatus.INTERNAL_SERVER_ERROR);
  res.send(`${httpStatus.INTERNAL_SERVER_ERROR} | Sorry, our application is taking a nap!`);
};
