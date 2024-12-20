import { Link } from "@tanstack/react-router";
import HomeIcon from "@mui/icons-material/Home";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { FileRoutesByPath } from "@tanstack/react-router";
import { useSession } from "~/lib/auth-client";
import { Avatar, Button, Link as MaterialLink } from "@mui/material";
import { UserDropdown } from "~/routes/(main)/_main/-components/user-dropdown";

type Link = {
  to: keyof FileRoutesByPath; // Ensure `to` is a valid key from `FileRoutesByPath`
  label: string;
  icon: React.ReactNode;
};

const links: Link[] = [
  {
    to: "/",
    label: "Contestants",
    icon: <QuestionMarkIcon />,
  },
];

export function Nav() {
  const { data: session, error } = useSession();

  return (
    <nav className="p-std-content flex justify-between h-20">
      <div className="flex-1 flex items-center">
        <UserDropdown />
      </div>
      <div className=" flex items-stretch">
        <Link
          to="/"
          className="text-white hover:opacity-80 transition-all flex items-center"
        >
          <img
            src="/src/assets/logo.png"
            alt="PokeBowl logo"
            className="w-24"
          />
        </Link>
      </div>
      <div className="flex gap-x-std-md items-center flex-1 justify-end">
        <Link href="/stats">
          <Button>Stats</Button>
        </Link>
        <Link
          to="/battle"
          activeProps={{
            className: "",
          }}
          className="h-full text-blue-600 bg-yellow-500 px-5 tracking-widest py-2 rounded-md shadow text-primary-foreground border-t-0 border-r-0 border-[2.5px] border-blue-800"
        >
          Battle
        </Link>
      </div>
    </nav>
  );
}
