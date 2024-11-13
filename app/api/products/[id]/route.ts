// app/api/products/[id]/route.ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return new NextResponse("Unauthorized", { status: 403 });
        }

        const product = await db.product.findUnique({
            where: {
                id: params.id,
                active: true,
            },
            select: {
                id: true,
                name: true,
                description: true,
                category: true,
                type: true,
                language: true,
                license: true,
                likecount: true,
                createdAt: true,
                docs: true,
            },
        });

        if (!product) {
            return new NextResponse("Product not found", { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
