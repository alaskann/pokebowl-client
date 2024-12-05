import { Button, TextField } from "@mui/material";
import { redirect, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { signUp } from "~/lib/auth-client";

export function JoinForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    const { data, error } = await signUp.email(
      {
        email,
        name,
        password,
        image: undefined,
      },
      {
        onSuccess: () => {
          toast("Join successful");
          navigate({ to: "/" });
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      }
    );
    console.log({ email, name, password });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSignUp();
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
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}
