const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, "data.txt");

// Write to file
app.post("/write", (req, res) => {
  const { text } = req.body;
  fs.writeFile(filePath, text, (err) => {
    if (err) {
      return res.status(500).send("Error writing file");
    }
    res.send("File written successfully");
  });
});

// Read from file
app.get("/read", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
