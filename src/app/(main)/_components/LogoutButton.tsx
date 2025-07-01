"use client";

import { useRouter } from "next/navigation";
import routes from "~/lib/routes";

const LogoutButton = () => {
  const route = useRouter();

  return (
    <button
      onClick={() => route.push(routes.home)}
      className="w-full text-left border-t mt-3.5 px-6 pt-3.5 text-muted-foreground hover:text-foreground space-y-0.5"
    >
      <h6>Sign out</h6>
      <p className="text-sm line-clamp-1">ikramhussaindev404@gmail.com</p>
    </button>
  );
};

export default LogoutButton;
