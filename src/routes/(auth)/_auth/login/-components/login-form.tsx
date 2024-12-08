import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { signIn } from "~/lib/auth-client";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    const { error } = await signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          navigate({ to: "/battle" });
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      }
    );
  };

  return (
    <div className="flex flex-col gap-y-std-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSignUp();
        }}
      >
        <div className="flex flex-col gap-y-std-content">
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
            label="password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" className="self-end">
            Login
          </Button>
        </div>
      </form>
      <div className="text-right">
        Don't have an account?{" "}
        <Link to="/join" className="underline">
          Join
        </Link>{" "}
        instead.
      </div>
    </div>
  );
}
