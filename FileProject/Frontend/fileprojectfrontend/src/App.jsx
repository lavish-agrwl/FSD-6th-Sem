import { useState } from "react";
import "./App.css";
import logo from "./assets/image.png";

function App() {
  const [text, setText] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleWrite = async () => {
    if (!text.trim()) {
      setMessage("Please enter some text to write.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("http://localhost:3000/write", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      if (response.ok) {
        setMessage("File written successfully!");
        setText(""); // Clear input after successful write
      } else {
        setMessage("Error writing file.");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRead = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("http://localhost:3000/read");
      if (response.ok) {
        const data = await response.text();
        setContent(data);
        setMessage("File read successfully!");
      } else {
        setMessage("Error reading file.");
        setContent("");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
      setContent("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logoContainer">
        <img src={logo} alt="Logo" className="logo" />
        <div className="home">File Reader and Writer</div>
        </div>
        <div className="home">Home</div>
      </nav>
      <main className="main">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to write to file"
            disabled={loading}
          />
          <div className="buttons">
            <button type="button" onClick={handleWrite} disabled={loading}>
              {loading ? "Writing..." : "Write to File"}
            </button>
            <button type="button" onClick={handleRead} disabled={loading}>
              {loading ? "Reading..." : "Read from File"}
            </button>
          </div>
          {message && (
            <p
              style={{
                marginTop: "1rem",
                color: message.includes("Error") ? "#ff6b6b" : "#51cf66",
              }}
            >
              {message}
            </p>
          )}
        </form>
        <div className="viewing-pane">
          <h3>File Content:</h3>
          <pre>
            {content ||
              "No content to display. Click 'Read from File' to load content."}
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;
