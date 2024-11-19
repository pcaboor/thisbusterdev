import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const count = searchParams.get('count') ? Number(searchParams.get('count')) : 3;
        const category = searchParams.get('category');

        const randomProducts = await db.product.findMany({
            take: count,
            where: {
                active: true,
                ...(category && { category })
            },
            select: {
                id: true,
                name: true,
                description: true,
                category: true,
                createdAt: true,
                type: true,
                language: true,
                license: true,
                likecount: true,
                image: true,
                docs: true,
            },
            orderBy: {
                id: 'asc', // Fallback randomization
            },
        });

        return NextResponse.json(randomProducts);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}