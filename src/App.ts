import cors from "cors";
import express from "express";
import helmet from "helmet";
import { ApiError } from "./utils/ServerError";
import apiRouter from "./routes/Router";
import { errorController } from "./controllers/Error.Controller";

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json({ limit: "15kb" }));

app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

app.get("/test", (req, res) => {
    const query = req.query.query;
    res.status(200).send(`query was received to be ${query}`);
});

app.use("*", (_req, _res, next) => {
    next(new ApiError(404, "fail", "attempt to navigate to undefined route"));
});

app.use(errorController);

export default app;
