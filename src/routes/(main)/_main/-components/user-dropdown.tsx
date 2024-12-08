import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import { signOut, useSession } from "~/lib/auth-client";
import { DEFAULT_AVATAR_URL } from "~/constants";
import { useNavigate } from "@tanstack/react-router";

export function UserDropdown() {
  const { data: session } = useSession();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-full">
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar
          alt="Profile Image"
          src={DEFAULT_AVATAR_URL}
          className="border-2 border-blue-800"
        />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="mt-std-sm"
      >
        <div className="px-4 py-2">Welcome {session?.user.name}!</div>
        <MenuItem
          onClick={async () => {
            handleClose();
            await signOut({
              fetchOptions: {
                onSuccess: () => {
                  navigate({ to: "/login" });
                },
              },
            });
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
