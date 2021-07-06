import express from "express";
import "./database"; // import and start connections
import { router } from "./router";

const app = express();

// configs
app.use(express.json());

// access
app.use(router);

app.listen(3000, () => console.log("Server is running..."));