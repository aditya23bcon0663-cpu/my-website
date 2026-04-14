import app from "./app";
import { connectToDatabase } from "./config/database";
import { env } from "./config/env";

async function startServer(): Promise<void> {
  await connectToDatabase();

  app.listen(env.port, () => {
    console.log(`Aselea Network API running on http://localhost:${env.port}`);
  });
}

void startServer();
