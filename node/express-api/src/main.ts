import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { homeRoutes } from './routes/home.routes';
import { burgersRoutes } from "./routes/burgers.routes";

const app = express();

app.use(cors());

app.use(bodyParser.json())

homeRoutes(app);
burgersRoutes(app);

app.listen(3333, () => console.log('Hello From Express'));
