import { db } from '../../../lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        // Obtenez les paramètres de recherche de l'URL
        const { searchParams } = new URL(req.url);
        const query = searchParams.get('q');

        if (!query) {
            return NextResponse.json({ error: 'Query parameter missing' }, { status: 400 });
        }

        console.log('Search query:', query);

        // Recherchez les produits dans la base de données
        const products = await db.product.findMany({
            where: {
                OR: [
                    { name: { contains: query } },
                    { description: { contains: query } },
                    { category: { contains: query } },
                    { type: { contains: query } },
                    { language: { contains: query } },
                    { license: { contains: query } },
                    { docs: { contains: query } },
                ],
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
            },
        });

        console.log(`Found ${products.length} products`);

        // Retournez les produits en réponse
        return NextResponse.json({ products });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
