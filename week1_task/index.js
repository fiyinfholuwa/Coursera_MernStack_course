const express = require('express');
const bodyParser = require('body-parser');



const app = express();




// #Routes
app.use("/dishes", require("./dishRouter"));
app.use("/promotion", require("./promoRouter"));
app.use("/leader", require("./leaderRouter"));


const port = 3000;

app.listen(port, () =>
    console.log(`Server listening on port ${port}`)
);
