import { Client } from "pg";

async function query(queryObject: string) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect();

  const result = await client.query(queryObject);

  await client.end();

  return result;
}

export default {
  query: query,
};
