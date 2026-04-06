import express from 'express'
import { ENV } from './config/env.js';
const app = express();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => { res.send("Hello World") });
console.log("mongo uri: " + ENV.MONGO_URI);
console.log("node env: " + ENV.NODE_ENV);

app.listen(ENV.PORT, () => { console.log("Servers is running on port: " + ENV.PORT) });