import "./Config";
import app from "./App";

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

process.on("unhandledRejection", err => {
    console.error("Promise went unhandled, shutting down...");
    console.error(err);
    process.exit(1);
});
