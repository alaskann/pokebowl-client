import { Button, TextField } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { signUp } from "~/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { ZodValidator, zodValidator } from "@tanstack/zod-form-adapter";
import FieldInfo from "~/components/field-info";
import { PasswordStrength } from "./password-strength";
import zxcvbn from "zxcvbn";
import { joinSchema, JoinSchema } from "~/lib/schemas/auth";

export function JoinForm() {
  const navigate = useNavigate();

  const form = useForm<JoinSchema, ZodValidator>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
    },
    validators: { onChange: joinSchema },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) => {
      if (form.state.isFormValid) {
        await signUp.email(
          {
            email: value.email,
            name: value.name,
            password: value.password,
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
        return;
      }
      toast.error("Form is invalid");
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
        <div className="flex flex-col gap-y-std-md">
          <form.Field
            name="email"
            children={(field) => (
              <div className="flex flex-col gap-2">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.setValue(e.target.value)}
                  error={field.state.meta.errors.length > 0}
                />
                <FieldInfo fieldMeta={field.state.meta} />
              </div>
            )}
          />
          <form.Field
            name="name"
            children={(field) => (
              <div className="flex flex-col gap-y-std-sm">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  type="text"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.setValue(e.target.value)}
                  error={false}
                />
                <FieldInfo fieldMeta={field.state.meta} />
              </div>
            )}
          />
          <form.Field
            name="password"
            children={(field) => (
              <div className="flex flex-col gap-y-std-sm">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.setValue(e.target.value)}
                  error={false}
                />
                <PasswordStrength strength={zxcvbn(field.state.value).score} />
                <FieldInfo fieldMeta={field.state.meta} />
              </div>
            )}
          />
          <form.Field
            name="passwordConfirm"
            children={(field) => (
              <div className="flex flex-col gap-y-std-sm">
                <TextField
                  id="outlined-basic"
                  label="Repeat Password"
                  variant="outlined"
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.setValue(e.target.value)}
                  error={false}
                />
                <FieldInfo fieldMeta={field.state.meta} />
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
