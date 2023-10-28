const { getAll, create, remove, update, getOne} = require('../controllers/user.controller');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
    .post(create)

userRouter.route("/:id")
		.get(getOne)
    .delete(remove)
    .patch(update)

module.exports = userRouter;