import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
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
      href: "/dashboard/products",
      icon: "cloud",
    },
    {
      title: "API Token",
      href: "/dashboard/api/token",
      icon: "key",
    },
    {
      title: " Market Place",
      href: "/dashboard/marketplace",
      icon: "marketPlace",
    },
    {
      title: "Create product",
      href: "/dashboard/create-product",
      icon: "penTool",
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
