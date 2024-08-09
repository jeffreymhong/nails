import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import bodyParser from "body-parser";

// initialize important variables
const app = express();
const port = 3000;
const directoryPath = dirname(fileURLToPath(import.meta.url));

// initialize middleware
app.use(express.static(join(directoryPath, "../client/dist")));
app.use(bodyParser.urlencoded({ extended: true }));

// initialize route-handlers + additional middleware
function serveReact(req, res) {
  res.sendFile(join(directoryPath, "../client/dist/index.html"));
}

app.get("/", serveReact);

app.get("/service", serveReact);

app.get("/reservation", serveReact);

app.get("/about", serveReact);

app.post("/submit", (req, res) => {
  console.log(req.body);
});
// start server
app.listen(port, () => {
  console.log(`Listening in on port ${port}`);
});
