import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return new NextResponse("Unauthorized", { status: 403 });
        }
        const { user } = session


        const json = await req.json();
        const { name, description, category, type, language, license, docs } = json;

        const product = await db.product.create({
            data: {
                name,
                description,
                category,
                type,
                language,
                license,
                price: 0,
                requestLimit: 1000,
                bandwidthLimit: 1000,
                active: true,
                likecount: 0,
                createdAt: new Date(),
                docs,

            },
            select: {
                id: true,
            },
        })
        return NextResponse.json(product);
    } catch (error) {
        console.error("Error creating product:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}