import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Market Place",
      href: "/marketing",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Hello",
      href: "/dashboard",
      icon: "handMetal",
    },
    {
      title: "API",
      href: "/api",
      icon: "cloud",
    },
    {
      title: "API Token",
      href: "/dashboard/api/token",
      icon: "key",
    },
    {
      title: "Storage",
      href: "/dashboard/storage",
      icon: "package",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "wallet",
    },
    {
      title: "Integration",
      href: "/dashboard/integration",
      icon: "codeXml",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
