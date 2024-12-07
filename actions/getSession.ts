import { authOptions } from "../lib/AuthProviders";
import { getServerSession } from "next-auth";
export default async function getSession() {
  return await getServerSession(authOptions);
}
