require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
// const userRouter = require('./routers/auth.route');
const mongoUrl = process.env.MONGO_URI;

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser()); // read cookie from browser
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
mongoose.connect(mongoUrl).then( () => {
    console.log('db connected');
    app.listen(process.env.PORT, ()=> {
        console.log('Running on PORT -',process.env.PORT);
    })
})

app.get('/', (req, res) => {
    return res.json({msg : "Hello World"});
})

// signup, login, logout
// app.use('/api/user', userRouter);