const express = require("express");
const login = require("../../controller/client/login.controller");
const Router = express.Router();
Router.get("/", login.index);
Router.patch("/signin",login.signIn);
Router.get("/signOut", login.signOut);
Router.get("/index_signUp", login.index_signUp);
Router.patch("/signUp", login.signUp);
Router.patch("/verified", login.verified);



module.exports = Router;
