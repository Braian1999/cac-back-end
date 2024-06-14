const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CODO A CODO!!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
