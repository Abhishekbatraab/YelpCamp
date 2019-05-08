const userroutes = require('./routes/userroutes');
const bodyparser = require("body-parser");
function loadMiddlewares(app, express){
    app.set("view engine", "ejs");
    app.use(bodyparser.urlencoded({extended:true}));
    app.use("/", userroutes);
}

module.exports = loadMiddlewares;