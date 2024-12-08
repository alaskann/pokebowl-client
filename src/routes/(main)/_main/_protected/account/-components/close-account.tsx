import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { deleteUser } from "~/lib/auth-client";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { CLOSE_ACCOUNT_VALIDATION_PROMPT } from "~/constants";
import { toast } from "sonner";
import { useRouter } from "@tanstack/react-router";
export function CloseAccount() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleCloseAccount = async () => {
    if (input === CLOSE_ACCOUNT_VALIDATION_PROMPT) {
      await deleteUser({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Account closed");
            router.invalidate();
          },
          onError: (ctx) => {
            toast.error("Account count not be closed");
          },
        },
      });
      return;
    }
    toast.error("Prompt is invalid");
  };

  return (
    <div className="space-y-std-content">
      <div>
        To delete your account, please type{" "}
        <code className="bg-stone-800 px-2 py-1 rounded-md">AshKetchum</code>{" "}
        below.
      </div>
      <Card className="p-std-content flex flex-col gap-y-std-content">
        <TextField
          id="outlined-basic"
          label="Enter the above prompt"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="outlined"
          color="error"
          disabled={input !== CLOSE_ACCOUNT_VALIDATION_PROMPT}
          onClick={handleCloseAccount}
        >
          Close Account
        </Button>
      </Card>
    </div>
  );
}
