import { Link } from "@tanstack/react-router";

export function AuthHead() {
  return (
    <nav className="p-std-content flex justify-center h-20">
      <div className="flex items-stretch">
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
    </nav>
  );
}
