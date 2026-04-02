import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// Main API
app.get("/boobs", async (req, res) => {
  try {
    const response = await fetch("https://api.dorratz.com/nsfw/tetas");
    
    if (!response.ok) {
      return res.status(500).json({ error: "Source API failed" });
    }

    const buffer = await response.arrayBuffer();

    res.setHeader("Content-Type", "image/jpeg");
    res.send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Home route
app.get("/", (req, res) => {
  res.send("Bal FF API is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
