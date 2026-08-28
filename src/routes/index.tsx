import { createFileRoute } from "@tanstack/react-router";
import { ProfileApp } from "@/components/profile-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <ProfileApp />;
}
