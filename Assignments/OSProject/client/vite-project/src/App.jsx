import { useState } from "react";
import "./App.css";

const API_BASE = "http://localhost:4000";

const actions = [
  { label: "User Info", action: "userInfo" },
  { label: "Architecture", action: "arch" },
  { label: "Free Memory", action: "freeMem" },
  { label: "Host Name", action: "hostName" },
  { label: "Total Memory", action: "totalMem" },
];

function App() {
  const [output, setOutput] = useState("Press a button to fetch OS info.");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formatResult = (value) => {
    if (value && typeof value === "object") {
      return JSON.stringify(value, null, 2);
    }
    return String(value);
  };

  const handleFetch = async (action) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/os/${action}`);
      if (!res.ok) {
        throw new Error("Failed to fetch OS info");
      }
      const data = await res.json();
      setOutput(formatResult(data.result));
    } catch (err) {
      setError(err.message || "Unknown error");
      setOutput("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>OS Info Viewer</h1>
        <p>Click a button below to query the server for OS details.</p>
      </header>

      <pre className="viewer">
        {loading ? "Loading..." : output || "No data yet."}
      </pre>

      {error && <div className="error">{error}</div>}

      <div className="buttons">
        {actions.map((item) => (
          <button
            key={item.action}
            onClick={() => handleFetch(item.action)}
            disabled={loading}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
