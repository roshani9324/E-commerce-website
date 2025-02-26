import express from "express";
import mongoose from "mongoose";
import userRouter from "./Routes/user.js";
import bodyParser from "express";
import productRouter from "./Routes/product.js";
import cartRouter from "./Routes/cart.js";
import addressRouter from "./Routes/address.js";
import cors from "cors";

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
  })
);

//home testing route
app.get("/", (req, res) => res.json({ message: "This is home routes" }));

//user router
app.use("/api/user", userRouter);

//product router
app.use("/api/product", productRouter);

//cart Router
//const cartRouter=require('./Routes/cart.js')
app.use("/api/cart", cartRouter);

//address Router
app.use("/api/address", addressRouter);

mongoose
  .connect(
    "API",
    { dbName: "MERN_E_Commerce" }
  )
  .then(() => console.log("MongoDB Connected Successfully.....!"))
  .catch((error) => console.log(error));
const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`));
