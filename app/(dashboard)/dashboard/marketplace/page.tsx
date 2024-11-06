import { redirect } from "next/navigation"

import { authOptions } from "../../../../lib/auth"
import { db } from "../../../../lib/db"
import { getCurrentUser } from "../../../../lib/session"
import DashboardBlock1 from "../../../../components/blocks/dashboard_block1"
import React from "react"

export const metadata = {
    title: "Dashboard",
}

export default async function DashboardPage() {
    const user = await getCurrentUser()

    if (!user) {
        redirect(authOptions?.pages?.signIn || "/login")
    }

    const posts = await db.post.findMany({
        where: {
            authorId: user.id,
        },
        select: {
            id: true,
            title: true,
            published: true,
            createdAt: true,
        },
        orderBy: {
            updatedAt: "desc",
        },
    })

    return (
        <div>
            <DashboardBlock1 />
        </div>
    )
}
