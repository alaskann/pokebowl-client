import { LinearProgress } from "@mui/material";

export function PasswordStrength({ strength }: { strength: number }) {
  if (strength === 0) return;
  return (
    <LinearProgress
      variant="determinate"
      value={Math.ceil((strength / 4) * 100)}
      color={
        strength === 3 || strength === 4
          ? "success"
          : strength === 2
            ? "warning"
            : "error"
      }
    />
  );
}
