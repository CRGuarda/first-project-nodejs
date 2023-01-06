import { config } from "dotenv";

config();

export const DB_PORT = process.env.DB_PORT || 3000;
export const PORT = process.env.PORT || 3000;
