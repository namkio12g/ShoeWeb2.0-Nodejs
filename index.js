const express = require("express");
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");
// const route = require("./routes/client/index.route");
const database = require("./config/database");
var methodOverride = require("method-override");
const path = require("path");
// var flash = require("express-flash");
var cookieParser = require("cookie-parser");
// var session = require("express-session");
// const bodyParser = require("body-parser");
const cors = require("cors");
const bodyParser = require("body-parser");



require("dotenv").config();
const port = process.env.PORT;
const app = express();
const session = require('express-session');
app.use(session({
    secret: 'little love',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Override Method
app.use(methodOverride("_method`"));

// const routeAdmin = require("./routes/admin/index.route");

database.connect();
// app.use(cookieParser("keyboard cat"));
// app.use(session({ cookie: { maxAge: 60000 } }));
// app.use(flash());
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");
app.use(express.static(`${__dirname}/public`));
app.use("/build", express.static(path.join(__dirname, "build")));

// app.use(express.static("./"));

route(app);
routeAdmin(app);
// routeAdmin(app);

app.listen(port, () => {});
