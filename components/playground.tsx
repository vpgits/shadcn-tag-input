"use client";

import React, { useState } from "react";
import { TagInput, Tag } from "./tag-input";
import { Card, CardContent } from "@/components/ui/card";

interface Employee {
  name: string;
  email: string;
}

type EmployeeTag = Tag<Employee>;

const Playground = () => {
  // Sample employee data
  const allTags: EmployeeTag[] = [
    {
      label: "Alice Johnson",
      value: { name: "Alice Johnson", email: "alice@company.com" },
    },
    {
      label: "Bob Smith",
      value: { name: "Bob Smith", email: "bob@company.com" },
    },
    {
      label: "Charlie Davis",
      value: { name: "Charlie Davis", email: "charlie@company.com" },
    },
    {
      label: "Diana Miller",
      value: { name: "Diana Miller", email: "diana@company.com" },
    },
    {
      label: "Edward Wilson",
      value: { name: "Edward Wilson", email: "edward@company.com" },
    },
  ];

  const [selectedPeers, setSelectedPeers] = useState<EmployeeTag[]>([
    {
      label: "Charlie Davis",
      value: { name: "Charlie Davis", email: "charlie@company.com" },
    },
  ]);

  return (
    <div>
      <h1>Playground</h1>
      <Card className="p-1">
        <CardContent>
          <div className="flex flex-col justify-end px-6 gap-y-3 ">
            <>
              <TagInput<Employee>
                tags={selectedPeers}
                setTags={setSelectedPeers}
                allTags={allTags}
                AllTagsLabel={({ value }) => (
                  <span className="text-foreground w-full flex justify-between">
                    <span>{value.name}</span>
                    <span className="text-sm">{value.email}</span>
                  </span>
                )}
                placeholder="Enter something (hint: try typing 'a')"
                className="w-full mt-2"
              />
            </>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Playground;
