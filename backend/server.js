import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 6969;

app.get("/", (req, res) => {
  res.send("Server is Ready!");
  console.log(req);
});
app.listen(PORT, () =>
  console.log(
    `Listening at ${PORT}, Click here to redirect http://localhost:${PORT}/`
  )
);
