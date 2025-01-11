// scripts/build-registry.ts
import fs from "fs";
import path from "path";

async function buildRegistry() {
  console.log("🚀 Building registry...");
  const registry = {
    name: "tag-input",
    type: "components:ui", // Changed to match shadcn's expected type
    description: "A searchable tag input component with pill-style tags",
    dependencies: {
      "@radix-ui/react-dialog": "*", // Using * instead of empty string
      "@radix-ui/react-popover": "*",
      "@radix-ui/react-slot": "*",
      "class-variance-authority": "*",
      clsx: "*",
      cmdk: "*",
      "lucide-react": "*",
      "tailwind-merge": "*",
      "tailwindcss-animate": "*",
    },
    registryDependencies: ["command", "badge"], // Add this to specify required shadcn components
    files: [
      {
        name: "ui/tag-input.tsx", // Changed path format to match shadcn's
        content: fs.readFileSync(
          path.join(process.cwd(), "components/tag-input.tsx"),
          "utf-8"
        ),
      },
      {
        name: "ui/pill.tsx", // Changed path format
        content: fs.readFileSync(
          path.join(process.cwd(), "components/pill.tsx"),
          "utf-8"
        ),
      },
      {
        name: "lib/utils.ts",
        content: fs.readFileSync(
          path.join(process.cwd(), "lib/utils.ts"),
          "utf-8"
        ),
      },
    ],
    implements: "Tag Input", // Add this to specify what the component implements
  };

  const registryDir = path.join(process.cwd(), "public/registry");
  fs.mkdirSync(registryDir, { recursive: true });
  console.log("📁 Created registry directory");

  fs.writeFileSync(
    path.join(registryDir, "tag-input.json"),
    JSON.stringify(registry, null, 2)
  );

  console.log("✅ Registry built successfully");
}

buildRegistry().catch(console.error);
