import { TextField } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { signUp } from "~/lib/auth-client";

const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [password, setPassword] = useState("");

return (
  <div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        signUp.email(
          {
            email,
            name,
            password,
          },
          {
            onSuccess: () => {
              toast.success("Sign up successful");
            },
            onError: () => {
              toast.error("Sign up failed");
            },
          }
        );
      }}
    >
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="name"
        variant="outlined"
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </form>
  </div>
);
