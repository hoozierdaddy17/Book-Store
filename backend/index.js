import express from "express";
import  { PORT, mongoDBURL } from "./config.js";
import mongoose, { mongo } from "mongoose";

const app = express();

// http method
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Stack World')
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        // function to listen to this port:
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    })
    .catch((error) => {
        console.log("error");
    });