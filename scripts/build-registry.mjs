// scripts/build-registry.ts
import fs from "fs";
import path from "path";

async function buildRegistry() {
  console.log("🚀 Building registry...");
  const registry = {
    name: "tag-input",
    type: "registry:component", // Changed to valid registry type
    description: "A searchable tag input component with pill-style tags",
    dependencies: [
      // Changed to array format
      "@radix-ui/react-dialog",
      "@radix-ui/react-popover",
      "@radix-ui/react-slot",
      "class-variance-authority",
      "clsx",
      "cmdk",
      "lucide-react",
      "tailwind-merge",
      "tailwindcss-animate",
    ],
    registryDependencies: ["command", "badge"],
    files: [
      {
        name: "tag-input.tsx",
        type: "registry:component", // Added type
        path: "components/ui/tag-input.tsx", // Added full path
        content: fs.readFileSync(
          path.join(process.cwd(), "components/tag-input.tsx"),
          "utf-8"
        ),
      },
      {
        name: "pill.tsx",
        type: "registry:component",
        path: "components/ui/pill.tsx",
        content: fs.readFileSync(
          path.join(process.cwd(), "components/pill.tsx"),
          "utf-8"
        ),
      },
      {
        name: "utils.ts",
        type: "registry:lib",
        path: "lib/utils.ts",
        content: fs.readFileSync(
          path.join(process.cwd(), "lib/utils.ts"),
          "utf-8"
        ),
      },
    ],
    implements: "Tag Input",
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
