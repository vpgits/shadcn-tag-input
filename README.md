# Shadcn Tag Input Component

A customizable and accessible tag input component built for shadcn/ui. This component allows users to select multiple tags from an intuitive searchable dropdown, with keyboard navigation support and a clean, modern design.

## Credits

This component was developed with inspiration from the following projects:

- [Sonner by Emil Kowalski](https://github.com/emilkowalski/sonner)
- [Victor Welander's Projects](https://github.com/victorwelander)

As always, thanks to [shadcn-ui](https://github.com/shadcn-ui) and [shadcn](https://github.com/shadcn).

## Features

- 🔍 Searchable tag selection
- ⌨️ Full keyboard navigation support
- 🎨 Follows your shadcn theme
- 🧩 Fully customizable
- ♿ Accessible
- 📱 Mobile friendly
- 🏷️ Pill-style tags with remove option
- 🔄 Backspace support for tag removal
- 🎨 Custom theming for displaying tags
- ❌❌ Press the cross twice to clear all

## Installation

```bash
npx shadcn-ui@latest add https://shadcn-tag-input/registry/tag-input.json
```

This will install the component and all required dependencies.

## Prerequisites

This component requires:

- A Next.js project with shadcn/ui configured
- The following shadcn components installed:
  - Command
  - Badge

Works with Next-Js 15 with `--legacy-peer-deps` flag.

## Usage

```tsx
import { TagInput } from "@/components/ui/tag-input";
import { useState } from "react";

type Tag = {
  label: string;
  value: string;
};

export default function Demo() {
  const [tags, setTags] = useState<Tag[]>([]);

  const allTags = [
    { label: "React", value: "react" },
    { label: "Next.js", value: "nextjs" },
    { label: "TypeScript", value: "typescript" },
    { label: "shadcn/ui", value: "shadcn" },
  ];

  return (
    <TagInput
      tags={tags}
      setTags={setTags}
      allTags={allTags}
      placeholder="Add frameworks..."
    />
  );
}
```

## Props

| Prop           | Type                                           | Description                          | Default   |
| -------------- | ---------------------------------------------- | ------------------------------------ | --------- |
| `tags`         | `Tag<T>[]`                                     | Currently selected tags              | Required  |
| `setTags`      | `(tags: Tag<T>[]) => void`                     | Function to update tags              | Required  |
| `allTags`      | `Tag<T>[]`                                     | Array of all available tags          | Required  |
| `AllTagsLabel` | `({ value }: { value: T }) => React.ReactNode` | Custom render function for tag items | Optional  |
| `placeholder`  | `string`                                       | Input placeholder text               | "Add tag" |
| `className`    | `string`                                       | Additional CSS classes               | Optional  |

## Advanced Usage

### Custom Tag Rendering

You can customize how tags appear in the dropdown using the `AllTagsLabel` prop:

```tsx
function Demo() {
  return (
    <TagInput
      tags={tags}
      setTags={setTags}
      allTags={allTags}
      AllTagsLabel={({ value }) => (
        <div className="flex items-center gap-2">
          <Icon name={value} />
          <span>{value}</span>
        </div>
      )}
    />
  );
}
```

### Controlled Input

The component is fully controlled, allowing you to manage the tag state in your application:

```tsx
function Demo() {
  const [tags, setTags] = useState<Tag[]>([]);

  const handleTagsChange = (newTags: Tag[]) => {
    // Add any validation or transformation logic here
    setTags(newTags);
  };

  return <TagInput tags={tags} setTags={handleTagsChange} allTags={allTags} />;
}
```

## Theming

The component uses your existing shadcn theme and can be customized using Tailwind classes:

```tsx
<TagInput
  className="max-w-md"
  // Add any Tailwind classes for customization
/>
```

## Development

To modify the component:

1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Build the registry: `npm run build-registry`
5. Test your changes locally

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this component in your projects. Or just copy and paste from here. Use this as you please.

---
