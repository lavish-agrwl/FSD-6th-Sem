const express = require("express");
const app = express();

const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 21 },
];

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      message: "Hello, World!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.get("/:id", (req, res) => {
  try {
    const studentId = req.params.id;
  } catch (error) {}
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
