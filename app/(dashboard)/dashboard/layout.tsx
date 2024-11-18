import { notFound } from "next/navigation"

import { dashboardConfig } from "@/config/dashboard"
import { getCurrentUser } from "@/lib/session"
import { MainNav } from "@/components/main-nav"
import { DashboardNav } from "@/components/nav"
import { SiteFooter } from "@/components/site-footer"
import { UserAccountNav } from "@/components/user-account-nav"
import SearchInput from "@/components/marketplace/searchInput"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-gray-900">
      <header className="top-0 z-40 border-b bg-gradient-to-tl from-gray-50 via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-gray-900">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />

          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          />
        </div>
      </header>
      <div className="container grid flex-1 gap-4 md:grid-cols-[200px_1fr] px-1.5">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden bg-gradient-to-tl from-gray-50 via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-gray-900">
          {children}
        </main>
      </div>
      <SiteFooter className="border-t bg-gradient-to-tl from-gray-50 via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-gray-900" />
    </div>
  )
}
