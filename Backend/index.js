const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const allRoutes = require('./router/allRoutes');


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: [
      'https://dharvee-infotech-task.vercel.app', // main prod domain
      'http://localhost:3000',                    // local dev
      'https://dharvee-infotech-task-x86e-git-main-nareshs-projects-6e7b16cf.vercel.app' // preview deployment
    ],
    credentials: true,
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
  }));
  
app.use('',allRoutes);
    
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;

