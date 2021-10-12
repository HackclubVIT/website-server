import cors from "cors";
import express from "express";
import helmet from "helmet";
import { ApiError } from "./utils/ServerError";
import apiRouter from "./routes/Router";
import { errorController } from "./controllers/Error.Controller";
import { join } from "path";

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json({ limit: "15kb" }));

app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

app.use(express.static(join(__dirname, "../public")));

app.use("*", (_req, _res, next) => {
    next(new ApiError(404, "fail", "attempt to navigate to undefined route"));
});

app.use(errorController);

export default app;
