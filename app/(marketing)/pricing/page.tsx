import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { APIPricing1 } from "@/components/blocks/pricing/api_pricing1"

export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem]">
      <APIPricing1 />
      {/* <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link> */}
    </section >
  )
}
