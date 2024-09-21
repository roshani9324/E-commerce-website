import express from "express";
import mongoose from "mongoose";
import userRouter from './Routes/user.js'
import bodyParser from 'express'
import productRouter from './Routes/product.js'
//import cartRouter from "./Routes/cart.js";
import cartRouter from "./Routes/cart.js";

const app = express();

app.use(bodyParser.json())

//home testing route
app.get("/", (req, res) => res.json({ message:"This is home routes" }));

//user router
app.use("/api/user", userRouter);

//product router
app.use('/api/product',productRouter)

//cart Router
app.use('/api/cart',cartRouter)

mongoose
  .connect(
    "mongodb+srv://avasheshmaurya419:TgSDLqQZn6zFRPW6@cluster0.rcgnm.mongodb.net/",
    { dbName:"MERN_E_Commerce" }
  )
  .then(() => console.log("MongoDB Connected Successfully.....!"))
  .catch((error) => console.log(error));
const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`));
