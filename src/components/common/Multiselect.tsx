"use client";

import { Check, ChevronsUpDown, X } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import For from "../helpers/For";
import If from "../helpers/If";
import { Label } from "../ui/label";

export const MultiSelect = (props: IMultiSelectProps) => {
  const { options, label, selectType } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[] | string>(() => {
    if (selectType === "single") return props.defaultValue ?? "";
    return [];
  });

  const handleSelect = (value: string) => {
    if (selectType === "single") {
      setSelected(value);
    } else {
      setSelected((prev) => {
        const list = Array.isArray(prev) ? prev : [];
        return list.includes(value)
          ? list.filter((item) => item !== value)
          : [...list, value];
      });
    }
  };

  const clearSelected = () => {
    setSelected(selectType === "single" ? "" : []);
  };

  const isSelected = (option: string): boolean => {
    if (selectType === "single") {
      return selected === option;
    }
    return (selected as string[]).includes(option);
  };

  const getSelectedCount = (): number => {
    if (selectType === "single") return selected ? 1 : 0;
    return (selected as string[]).length;
  };

  return (
    <div className="space-y-2 w-full">
      <Label className="text-foreground/75 ml-0.5 text-sm">{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <Button
          role="combobox"
          aria-expanded={open}
          variant={"secondary"}
          className="w-full justify-between focus-visible:ring-0 text-foreground/70"
          asChild
        >
          <PopoverTrigger>
            <If
              condition={getSelectedCount() > 0}
              then={
                <If
                  condition={selectType === "single"}
                  then={<span>{selected}</span>}
                  otherwise={<span>{getSelectedCount()} Selected</span>}
                />
              }
              otherwise={<span>Any</span>}
            />
            <If
              condition={getSelectedCount() > 0}
              then={
                <span className="block" onClick={clearSelected}>
                  <X className="stroke-muted-foreground" />
                </span>
              }
              otherwise={<ChevronsUpDown className="stroke-muted-foreground" />}
            />
          </PopoverTrigger>
        </Button>
        <PopoverContent align="start" className="w-full p-0 border-none">
          <Command>
            <CommandInput className="h-9" />
            <CommandList>
              <CommandEmpty>Nothing found.</CommandEmpty>
              <CommandGroup>
                <For
                  each={options}
                  render={(option) => (
                    <CommandItem
                      className={cn(isSelected(option) && "text-primary")}
                      key={option}
                      value={option}
                      onSelect={(value) => handleSelect(value)}
                    >
                      {option}
                      <Check
                        className={cn(
                          "ml-auto",
                          isSelected(option)
                            ? "opacity-100 stroke-primary"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  )}
                />
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

type IMultiSelectProps =
  | {
      selectType: "single";
      options: string[];
      label: string;
      defaultValue?: string;
    }
  | {
      selectType: "multiple";
      options: string[];
      label: string;
      defaultValue?: never;
    };
