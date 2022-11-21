const express = require("express");
const bible = require("./api/bible");
const app = express();

const PORT = process.env.PORT || 5050;

app.get("/", async (req, res) => {
  res.redirect("/api/bible");
});
app.use("/api/bible", bible);

app.listen(PORT, () =>
  console.log(`Servidor rodando em: http://localhost:${PORT}`)
);
