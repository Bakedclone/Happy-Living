import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
config({ path: "./config/config.env"});

export const app = express();

// Using middlewares

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// Importing & Using Router
import rooms from "./routes/roomsRoutes.js";
import users from "./routes/usersRoutes.js";
import property from "./routes/propertyRoutes.js";

app.use("/api/v1", rooms);
app.use("/api/v1", users);
app.use("/api/v1", property);

export default app;

app.use(ErrorMiddleware)