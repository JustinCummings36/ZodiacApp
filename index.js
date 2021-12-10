const express = require("express");
const app = express();
app.use(express.static(__dirname + '/client'));
//  Setup Enviroment variable
const port = process.env.PORT ||  3000;
app.listen(port, () => {
    console.log("app on port " + port);
});