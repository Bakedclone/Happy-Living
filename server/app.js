import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
import cors from "cors"
config({ path: "./config/config.env"});

export const app = express();

// Using middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// Importing & Using Router
import rooms from "./routes/roomsRoutes.js";
import users from "./routes/usersRoutes.js";
import property from "./routes/propertyRoutes.js";
import payment from "./routes/paymentRoutes.js";
import tenants from "./routes/tenantRoutes.js";
import other from "./routes/otherRoutes.js";

app.use("/api/v1", rooms);
app.use("/api/v1", users);
app.use("/api/v1", property);
app.use("/api/v1", payment);
app.use("/api/v1", tenants);
app.use("/api/v1", other);

export default app;

app.use(ErrorMiddleware)