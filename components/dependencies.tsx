import React from "react";
import CodeBlock from "./code-block";

export default function Dependencies() {
  return (
    <div className="flex flex-col">
      <div className="mb-2 flex flex-col">
        <h1 className="text-[16px] font-medium">Dependencies Installation</h1>
        <p className="text-sm text-[var(--ds-gray-900)]">
          Initialize shadcn UI and install the necessary dependencies using the
          commands below.
        </p>
        <p className="text-sm text-[var(--ds-gray-900)]">
          Note: This setup supports Next.js 15 with the{" "}
          <code>--legacy-peer-deps</code> flag.
        </p>
      </div>
      <div className="flex gap-2 flex-col">
        <CodeBlock
          fileName="Terminal"
          type="terminal"
          showLineNumbers
          lang="bash"
          className="w-full"
          code={`npx shadcn@latest init -d`}
        />
        <CodeBlock
          fileName="Terminal"
          type="terminal"
          showLineNumbers
          lang="bash"
          className="w-full"
          code={`npx shadcn add badge command popover`}
        />
      </div>
    </div>
  );
}
