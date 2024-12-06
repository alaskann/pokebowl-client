import { Button, TextField } from "@mui/material";
import { redirect, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { signUp } from "~/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { ZodValidator, zodValidator } from "@tanstack/zod-form-adapter";
import { JoinSchema, joinSchema } from "../-schema";

export function JoinForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const form = useForm<JoinSchema, ZodValidator>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    validators: { onChange: joinSchema },
    validatorAdapter: zodValidator(),
    onSubmit: async () => {
      const { data, error } = await signUp.email(
        {
          email: form.state.values.email,
          name: form.state.values.name,
          password: form.state.values.password,
          image: undefined, // Add profile image uploader
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
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="flex flex-col gap-y-std-sm">
          <form.Field
            name="email"
            children={(field) => (
              <div className="flex flex-col">
                <TextField
                  id="outlined-basic"
                  label="email"
                  variant="outlined"
                  type="email"
                  value={field.state.value}
                  onChange={(e) => field.setValue(e.target.value)}
                  error={false}
                />
              </div>
            )}
          />
          <form.Field
            name="email"
            children={(field) => (
              <div className="flex flex-col">
                <TextField
                  id="outlined-basic"
                  label="name"
                  variant="outlined"
                  type="text"
                  value={field.state.value}
                  onChange={(e) => field.setValue(e.target.value)}
                  error={false}
                />
              </div>
            )}
          />
          <form.Field
            name="password"
            children={(field) => (
              <div className="flex flex-col">
                <TextField
                  id="outlined-basic"
                  label="password"
                  variant="outlined"
                  type="password"
                  value={field.state.value}
                  onChange={(e) => field.setValue(e.target.value)}
                  error={false}
                />
              </div>
            )}
          />
          <Button type="submit" variant="contained" className="self-end">
            Join
          </Button>
        </div>
      </form>
    </div>
  );
}
