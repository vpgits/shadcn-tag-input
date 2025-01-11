import React from "react";
import CodeBlock from "./code-block";

export default function DialogCode() {
  return (
    <div className="flex flex-col">
      <div className="mb-2 flex flex-col">
        <h1 className="text-[16px] font-medium">Manual Installation</h1>
        <p className="text-sm text-[var(--ds-gray-900)]">
          Install the necessary dependencies and add the following files
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <CodeBlock
          fileName="Terminal"
          type="terminal"
          showLineNumbers
          lang="bash"
          className="w-full"
          code={`npx shadcn add popover badge command`}
        />
        <CodeBlock
          showLineNumbers
          fileName="tag-input.tsx"
          type="file"
          lang="tsx"
          code={`
            "use client";

import React, { useEffect } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "./ui/command";
import { X } from "lucide-react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils";
import Pill from "./pill";

export type Tag<T> = {
  label: string;
  value: T;
};

interface TagInputProps<T> {
  tags: Tag<T>[];
  setTags: (tags: Tag<T>[]) => void;
  allTags: Tag<T>[];
  AllTagsLabel?: ({ value }: { value: T }) => React.ReactNode;
  placeholder?: string;
  className?: string;
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center px-3" cmdk-input-wrapper="">
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
));

export function TagInput<T>({
  tags,
  setTags,
  allTags,
  AllTagsLabel,
  placeholder = "Add tag",
  className,
  ...props
}: TagInputProps<T>) {
  const container = React.useRef<HTMLDivElement>(null);
  const commandInput = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        container.current &&
        !container.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleBackSpace = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && inputValue === "") {
      event.preventDefault();
      event.stopPropagation();
      setTags(tags.slice(0, tags.length - 1));
    }
  };

  const handleValueChange = (value: string) => {
    setInputValue(value);
    setOpen(true);
  };

  const handleSelect = (selectedTag: Tag<T>) => {
    if (!tags.some((tag) => tag.label === selectedTag.label)) {
      setTags([...tags, selectedTag]);
    }
    setInputValue("");
    setOpen(true);
  };

  const handleRemove = (tagToRemove: Tag<T>) => {
    setTags(tags.filter((tag) => tag.label !== tagToRemove.label));
  };

  const handleClear = () => {
    if (inputValue !== "") {
      setInputValue("");
    } else {
      setTags([]);
    }
  };

  const filteredTags = allTags.filter(
    (tag) =>
      tag.label.toLowerCase().includes(inputValue.toLowerCase()) &&
      !tags.some((selectedTag) => selectedTag.label === tag.label)
  );

  return (
    <div className={(cn("space-y-2"), className)} ref={container} {...props}>
      <Command className={cn("rounded", className)}>
        <div
          className={cn(
            "flex w-full items-center flex-wrap gap-2 border rounded-md p-2 hover:cursor-text "
          )}
          onClick={() => commandInput.current?.focus()}
        >
          {tags.map((tag) => (
            <Pill
              key={tag.label}
              label={tag.label}
              onClick={() => handleRemove(tag)}
            />
          ))}

          <div className="flex flex-grow items-center justify-end">
            <div className="flex-1 min-w-0">
              <CommandInput
                placeholder={placeholder}
                value={inputValue}
                onValueChange={handleValueChange}
                onKeyDown={handleBackSpace}
                className="h-2 w-full"
                ref={commandInput}
              />
            </div>
            <X
              className="w-4 h-4 flex-shrink-0 cursor-pointer hover:text-red-700 transition-colors ml-2"
              onClick={handleClear}
            />
          </div>
        </div>

        {open && (
          <div className="w-full">
            <CommandList
              className={cn(
                "hide-scrollbar bg-primary-foreground w-full rounded-md"
              )}
            >
              <CommandEmpty>No tags found.</CommandEmpty>
              <CommandGroup>
                {filteredTags.map((tag) => (
                  <CommandItem
                    key={tag.label}
                    value={tag.label}
                    onSelect={() => handleSelect(tag)}
                    className="hover:cursor-pointer"
                  >
                    {AllTagsLabel ? (
                      <AllTagsLabel value={tag.value} />
                    ) : (
                      tag.label
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </div>
        )}
      </Command>
    </div>
  );
}
`}
        />
        <CodeBlock
          showLineNumbers
          fileName="pill.tsx"
          type="file"
          lang="tsx"
          code={`
            import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Badge } from "./ui/badge";

interface PillProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

export default function Pill({ label, className, onClick }: PillProps) {
  return (
    <Badge
      className={cn(
        "px-2 py-1 flex items-center justify-between gap-2 bg-inherit hover:bg-inherit text-muted-foreground border border-muted-foreground rounded-md",
        className
      )}
    >
      <span className="flex-1 text-center">{label}</span>
      {onClick && (
        <X
          className="w-4 h-4 flex-shrink-0 cursor-pointer hover:text-red-700 transition-colors"
          onClick={onClick}
        />
      )}
    </Badge>
  );
}
`}
        />
      </div>
    </div>
  );
}
