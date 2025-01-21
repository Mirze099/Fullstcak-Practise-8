import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://mirzarmaf206:mirze2005@fullstcakpractise8.zoy4v.mongodb.net/"
  )
  .then(() => {
    console.log("connected");
  });
