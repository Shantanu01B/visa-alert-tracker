require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const alertRoutes = require("./routes/alertRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use("/alerts", alertRoutes);

// Error Handler
app.use(errorHandler);

// DB + Server
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);