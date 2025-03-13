import { NextApiRequest, NextApiResponse } from "next";
import database from "../../../../infra/database";

export default async function status(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const result = await database.query("SELECT 1 + 1;");

  response.status(200).json({ message: "Hello, World!" });
}
