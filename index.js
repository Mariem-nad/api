const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require ("mongoose");
const authRoute = require("./routes/auth");
const userRouter = require("./routes/users")
dotenv.config();
app.use(express.json());

console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlparser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(console.log("connected to MongoDB")).catch(err=>console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRouter);

app.listen("5000", ()=> {
    console.log("Backend is running.")
});  