import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "@tanstack/react-form";
import { ZodValidator, zodValidator } from "@tanstack/zod-form-adapter";
import { useState } from "react";
import { toast } from "sonner";
import FieldInfo from "~/components/field-info";
import { changePassword } from "~/lib/auth-client";
import { ChangePasswordSchema, changePasswordSchema } from "~/lib/schemas/auth";
import { Loader2 } from "lucide-react";

export function ChangePassword() {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<ChangePasswordSchema, ZodValidator>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      repeatedNewPassword: "",
    },
    validators: {
      onChange: changePasswordSchema,
    },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) => {
      if (form.state.isFormValid) {
        await changePassword(
          {
            newPassword: value.newPassword,
            currentPassword: value.currentPassword,
            revokeOtherSessions: true,
          },
          {
            onRequest: () => {
              setIsPending(true);
            },
            onSuccess: () => {
              toast.success("Password changed");
              form.reset();
            },
            onError: (ctx) => {
              toast.error(ctx.error.message);
            },
            onResponse: () => {
              setIsPending(false);
            },
          }
        );
        return;
      }
      toast.error("Form is invalid");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="flex flex-col gap-y-std-content">
        <form.Field
          name="currentPassword"
          children={(field) => (
            <div className="w-full">
              <TextField
                id="outlined-basic"
                type="password"
                label="Current password"
                variant="outlined"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                error={field.state.meta.errors.length > 0}
                disabled={isPending}
                className="w-full"
              />
              <FieldInfo fieldMeta={field.state.meta} />
            </div>
          )}
        />
        <form.Field
          name="newPassword"
          children={(field) => (
            <div>
              <TextField
                id="outlined-basic"
                type="password"
                label="New password"
                variant="outlined"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                error={field.state.meta.errors.length > 0}
                disabled={isPending}
                className="w-full"
              />
              <FieldInfo fieldMeta={field.state.meta} />
            </div>
          )}
        />
        <form.Field
          name="repeatedNewPassword"
          children={(field) => (
            <div>
              <TextField
                id="outlined-basic"
                type="password"
                label="Repeat new password"
                variant="outlined"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                error={field.state.meta.errors.length > 0}
                disabled={isPending}
                className="w-full"
              />
              <FieldInfo fieldMeta={field.state.meta} />
            </div>
          )}
        />
        <div className="flex justify-end">
          <form.Subscribe
            selector={(state) => [state.isDirty, state.isValid]}
            children={([isDirty, isValid]) => (
              <Button
                variant="contained"
                type="submit"
                disabled={!isDirty || !isValid}
              >
                {!!isPending && <Loader2 className="animate-spin mr-2" />}
                Change Password
              </Button>
            )}
          />
        </div>
      </div>
    </form>
  );
}
