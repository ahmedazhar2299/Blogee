import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postRoute from "./routes/posts.js";
import dotenv from "dotenv/config";
import cors from 'cors'
const app = express();

const URI = `mongodb+srv://${process.env.AUTH_USER}:${process.env.AUTH_PASS}@cluster0.udwaqyp.mongodb.net/${process.env.AUTH_Collection}?retryWrites=true&w=majority`;
mongoose
  .connect(URI)
  .then(console.log("DB connection successful"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

//middleware
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoute);
dotenv;
app.listen(process.env.DEFAULT_PORT || 3001, (req, res) => {
  console.log("Server is running!");
});
