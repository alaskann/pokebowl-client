import * as React from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { getSession } from "~/lib/auth-client";

export const Route = createFileRoute("/")({
  component: IndexComponent,
  beforeLoad: async () => {
    const session = await getSession();
    if (!session) throw redirect({ to: "/login" });
    throw redirect({
      to: "/battle",
    });
  },
});

function IndexComponent() {
  return <></>;
}
