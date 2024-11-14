import { redirect } from "next/navigation";
import { authOptions } from "../../../../lib/auth";
import { db } from "../../../../lib/db";
import { getCurrentUser } from "../../../../lib/session";
import DashboardBlock1 from "../../../../components/blocks/dashboard_block1";

import React from "react";
import SearchInput from "@/components/marketplace/searchInput";




export default async function MarketPlacePage() {

    const user = await getCurrentUser();

    if (!user) {
        redirect(authOptions?.pages?.signIn || "/login");
    }

    return (

        <div className="flex flex-col md:flex-row gap-8">

            <div className="flex-grow">

                <DashboardBlock1 />


            </div>
        </div>
    );
}