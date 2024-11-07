import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../lib/auth";
import { db } from "../../../../lib/db";

export async function GET(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return new Response("Unauthorized", { status: 403 });
        }

        const url = new URL(req.url);
        const page = parseInt(url.searchParams.get("page") || "1"); // La page par défaut est 1
        const limit = parseInt(url.searchParams.get("limit") || "6"); // Limite par défaut de 10 produits par page

        const skip = (page - 1) * limit; // Calcul de l'offset pour la pagination

        // Récupérer les produits avec pagination
        const items = await db.product.findMany({
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
            },
            where: {
                active: true,
            },
            skip: skip, // Définir l'offset
            take: limit, // Limiter le nombre de produits récupérés
        });

        // Compter le nombre total de produits pour la pagination
        const totalItems = await db.product.count({
            where: {
                active: true,
            },
        });

        // Calculer le nombre total de pages
        const totalPages = Math.ceil(totalItems / limit);

        return new Response(
            JSON.stringify({
                products: items,
                total: totalItems,
                totalPages: totalPages,
                currentPage: page,
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return new Response("Server Error", { status: 500 });
    }
}
