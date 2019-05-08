const express = require('express');
const app = express();

const loadMiddlewares = require("./middlewares");
loadMiddlewares(app, express);
require("./error")(app);
//app.set("view engine", "ejs");

app.listen(3000, ()=>{
    console.log("YelpCamp app has started");
});