import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/Config.js";
import recipe from "./Routers/recipe.route.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT;
connectDB();

 app.use('/api', recipe)

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
})