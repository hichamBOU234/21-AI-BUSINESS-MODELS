import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@shared/schema";

// Create a PostgreSQL connection using the environment DATABASE_URL
const connectionString = process.env.DATABASE_URL || "";
const queryClient = postgres(connectionString);

// Create a drizzle instance
export const db = drizzle(queryClient, { schema });