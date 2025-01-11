import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { siGithub } from "simple-icons";

export default function Hero() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center text-center">
      <div className="relative w-full">
        <div className="relative h-[100px] w-full overflow-hidden py-1">
          {/* <Demonstration /> */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative -mt-8 flex flex-col items-center">
          <div className="rounded-lg px-4 py-2">
            <h1 className="text-[30px] font-bold md:text-[48px]">
              Shadcn Tag Input
            </h1>
            <p className="text-sm text-[var(--ds-gray-900)] md:text-[16px]">
              Tags, tags , tagS and more taGs. A simple and customizable tag
              input componet with search. Made using <code>cmdk</code> and{" "}
              <code>shadcn</code>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        {/* <RenderNestedDialog /> */}
        <Button variant={"ghost"} type="button">
          <Link
            href="https://github.com/vpgits/shadcn-tag-input"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <svg role="img" viewBox="0 0 24 24">
              <path d={siGithub.path} />
            </svg>
            <span>Github</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
