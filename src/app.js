import express from "express";
// import path from "path";
// import morgan from "morgan";

import customerRoutes from "./routes/customer.routes.js";

const app = express();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// routes
app.use(customerRoutes);

// starting the server
export default app;
