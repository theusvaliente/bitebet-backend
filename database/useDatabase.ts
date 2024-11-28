import { createClient } from '@libsql/client/http';
import { drizzle, type LibSQLDatabase } from 'drizzle-orm/libsql';
import 'dotenv/config';

export * as tables from './schema';

let database:LibSQLDatabase | null  = null;

export const useDatabase = () => {
  const { tursoDBURL, tursoDBToken } = process.env;

  if (tursoDBToken && tursoDBURL) {
    database = drizzle(
      createClient({
        url: tursoDBURL,
        authToken: tursoDBToken,
      }),
    );
  }

  return database;
};