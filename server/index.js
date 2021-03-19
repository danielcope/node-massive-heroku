require('dotenv').config();
const express = require('express');
const app = express();
const {port} = process.env;




app.use(express.json());

//Axios endpoints
//------------------------






//-------------------------


// const port = 4321

app.listen(port,() => console.log(`Server running on port` + port));