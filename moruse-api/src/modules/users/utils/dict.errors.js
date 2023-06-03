
const dictErrors = {
  USER_PASS_WRONG : {
    status: 404,
    message: "user or password wrong"
  },
  SERVER_ERROR : {
    status:500,
    message: "serval internal error"
  },
  USER_ALREADY_EXIST : {
    status:409,
    message: "user already exists"
  },
  USER_NOT_FOUND : {
    status: 404,
    message: "user not found"
  }
}


module.exports = dictErrors;
