"use client";

import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Show from "../helpers/Show";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <Button
        variant="secondary"
        className="w-72 justify-start focus-visible:ring-0 px-3"
        asChild
      >
        <DropdownMenuTrigger>Switch Theme</DropdownMenuTrigger>
      </Button>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="justify-between"
        >
          <div className="flex items-center gap-2">
            <Sun /> Light{" "}
          </div>
          <Show when={theme === "light"}>
            <Check />
          </Show>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="justify-between"
        >
          <div className="flex items-center gap-2">
            <Moon /> Dark{" "}
          </div>
          <Show when={theme === "dark"}>
            <Check />
          </Show>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="justify-between"
        >
          <div className="flex items-center gap-2">
            <Monitor /> System{" "}
          </div>
          <Show when={theme === "system"}>
            <Check />
          </Show>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
