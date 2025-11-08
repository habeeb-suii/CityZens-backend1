const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");  // ✅ import db connection
const issueRoutes = require("./routes/issueRoutes");

dotenv.config({ path: __dirname + "/.env" });  // ✅ important fix for OneDrive paths
connectDB();  // ✅ must come before app.listen()

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API is running..."));
app.use("/api/issues", issueRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


