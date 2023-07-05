// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import { userRouter } from "./routes/user.js";
// import { recipesRouter } from "./routes/recipes.js";


// app.use(express.json());
// app.use(cors());

// app.use("/auth", userRouter);
// app.use("/recipes", recipesRouter);

// mongoose.connect(
//   "mongodb+srv://hbdarade2018:<password>@cluster0.edokyrd.mongodb.net/?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// app.listen(3001, () => console.log("Server started"));

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

const CONNECTION_URL = "mongodb+srv://hbdarade2018:MernRecipe@cluster0.edokyrd.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;

mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, ()=> console.log(`Server running on port : ${PORT}`))).catch((error) => console.log(error.message));

