"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Search } from "lucide-react"
import { docsConfig } from "@/config/docs"

interface DocsSearchProps extends React.HTMLAttributes<HTMLDivElement> { }

export function DocsSearch({ className, ...props }: DocsSearchProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  // Flatten all documentation items for search
  const searchItems = React.useMemo(() => {
    const items: Array<{
      title: string
      href: string
      section: string
      disabled?: boolean
    }> = []

    docsConfig.sidebarNav.forEach((section) => {
      section.items.forEach((item) => {
        items.push({
          title: item.title,
          href: item.href,
          section: section.title,
          disabled: item.disabled,
        })
      })
    })

    return items
  }, [])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = React.useCallback((href: string) => {
    setOpen(false)
    router.push(href)
  }, [router])

  return (
    <div className={className} {...props}>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start text-sm text-muted-foreground sm:w-64 sm:pr-12",
        )}
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span>Search documentation...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {docsConfig.sidebarNav.map((section) => (
            <CommandGroup key={section.title} heading={section.title}>
              {section.items.map((item) => (
                <CommandItem className="text-sm"
                  key={item.href}
                  value={item.title}
                  onClick={() => handleSelect(item.href)}
                  onSelect={() => handleSelect(item.href)}
                  disabled={item.disabled}
                >
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  )
}