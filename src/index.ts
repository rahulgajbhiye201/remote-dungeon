import app from "./server";
import "dotenv/config";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`[Server]: Listening on the localhost at PORT ${PORT}`);
});
