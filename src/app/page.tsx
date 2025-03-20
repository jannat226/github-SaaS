import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { Button } from "../components/ui/button";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  return <Button className="text-red-600"> Hello World!</Button>
}
