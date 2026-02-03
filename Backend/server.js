const express = require("express");
const todoRoute = require("./router/todoRouter");
const dotenv = require("dotenv");
const userRoute = require("./router/userRouter");

dotenv.config();
const app = express

app.use(express.json());

// routes
app.use("/api/todos", todoRoute);  // plural (best practice)
app.use("/api/users", userRoute);  // plural (best practice)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
