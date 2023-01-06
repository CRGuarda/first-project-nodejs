import express from "express";
import { PORT } from "./config.js";

const app = express();
app.use(express.json());

app.get("/employees", (req, res) => {
  res.send("obteniendo employees");
});

app.post("/employees", (req, res) => {
  res.send("creando employees");
  console.log(req.body);
});

app.put("/employees", (req, res) => res.send("actualizando employees"));

app.delete("/employees", (req, res) => res.send("eliminando employees"));

app.listen(PORT);
console.log("hello world");
