const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 4000;

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true })

const connection = mongoose.connection;
connection.once('open', ()=>{

    console.log("DB connected succesfully");
})

const exerciseRouter = require('./routes/exercise');
const usersRouter = require('./routes/users');

app.use('/exercise',exerciseRouter)
app.use('/users', usersRouter)




app.listen(port, ()=>{

    console.log(`server running at port ${port}`);

})
