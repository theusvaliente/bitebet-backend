import { createClient } from '@libsql/client/http';
import { drizzle, type LibSQLDatabase } from 'drizzle-orm/libsql';
import 'dotenv/config';

export * as tables from './schema';

let database: LibSQLDatabase;

const useDatabase = () => {
  const { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } = process.env;

  if (TURSO_DATABASE_URL && TURSO_AUTH_TOKEN) {
    database = drizzle(
      createClient({
        url: TURSO_DATABASE_URL,
        authToken: TURSO_AUTH_TOKEN,
      }),
    );
  }

  return database;
};

export const db = useDatabase();