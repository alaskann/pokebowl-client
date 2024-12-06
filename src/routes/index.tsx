import * as React from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { getSession } from "~/lib/auth-client";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  beforeLoad: async () => {
    const { data: session, error } = await getSession();
    if (!session) throw redirect({ to: "/login" });
    throw redirect({
      to: "/battle",
    });
  },
});

function HomeComponent() {
  return <>HOME/INDEX</>;
}
