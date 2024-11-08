import * as React from 'react'
export const Index = {
  button: {
    name: "button",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "components/ui/button.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(() => import("@/components/ui/button.jsx")),
    source: "",
    category: "",
    subcategory: "",
    chunks: [],
  },
};
