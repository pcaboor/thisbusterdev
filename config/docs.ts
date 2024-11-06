import { HandMetal } from "lucide-react"
import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "What is Buster ?",
          href: "/docs/buster",
        },
      ],
    },
    {
      title: "API",
      items: [
        {
          title: "What is an API ?",
          href: "/docs/api",
        },
        {
          title: "Python",
          href: "/docs/api/create-api",
        },
        {
          title: "NodeJs",
          href: "/docs/api/create-api/nodejs",
        },
        {
          title: "PHP",
          href: "/docs/api/create-api/php",
        },
        {
          title: "Golang",
          href: "/docs/api/create-api/golang",
        },
        {
          title: "TypeScript",
          href: "/docs/api/create-api/typescript",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "What is Buster ?",
          href: "/docs/documentation",
        },
        {
          title: "Contentlayer",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Components",
          href: "/docs/documentation/components",
        },
        {
          title: "Code Blocks",
          href: "/docs/documentation/code-blocks",
        },
        {
          title: "Style Guide",
          href: "/docs/documentation/style-guide",
        },
        {
          title: "Search",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
}
