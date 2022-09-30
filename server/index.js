const express = require("express");
const cors = require("cors");
const bodypars= require('body-parser')
const app = express();
app.use(cors());
app.use(bodypars.json())

app.post("/customer/save", async (req, res) => {
        console.log(req.body);
        res.send()
});


app.post("/sum", async (req, res) => {
    var input = req.body
    var total = input.mark1+ input.mark2
    res.send({status:1,output:total});
  });

const PORT = 4000;

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
