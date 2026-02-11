const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const actions = {
  userInfo: () => os.userInfo(),
  arch: () => os.arch(),
  freeMem: () => os.freemem(),
  hostName: () => os.hostname(),
  totalMem: () => os.totalmem(),
};

app.get("/os/:action", (req, res) => {
  const action = req.params.action;
  const handler = actions[action];

  if (!handler) {
    return res.status(400).json({ error: "Unknown action" });
  }

  try {
    const result = handler();
    res.json({ action, result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  // Simple server start log
  console.log(`OS info server running on http://localhost:${PORT}`);
});
