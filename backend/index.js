import express from "express";
import cors from "cors";
const app = express();
import { route } from "./router/router.js";
import "./config/config.js";

app.use(cors());
app.use(express.json());
app.use("/product", route);

app.listen(3000, () => {
  console.log("3000 portunda dinlenilir");
});
