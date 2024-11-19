import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export function generateRandomAvatar() {
    // Générer des couleurs aléatoires pour le dégradé
    const color1 = getRandomColor();
    const color2 = getRandomColor();

    // Créer un SVG avec un dégradé unique
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
        <defs>
            <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="${color1}" />
                <stop offset="100%" stop-color="${color2}" />
            </linearGradient>
        </defs>
        
        <!-- Forme de base de l'avatar -->
        <circle cx="100" cy="100" r="90" fill="url(#avatarGradient)" />
        
    </svg>
    `;

    // Convertir le SVG en Base64 pour pouvoir le stocker facilement
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

// Fonction utilitaire pour générer une couleur aléatoire
function getRandomColor(): string {
    // Générer une teinte aléatoire
    const hue = Math.floor(Math.random() * 360);
    // Saturation et luminosité fixes pour un dégradé élégant
    return `hsl(${hue}, 70%, 60%)`;
}

// Modification de votre route pour utiliser cette fonction
export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return new NextResponse("Unauthorized", { status: 403 });
        }

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
                image: generateRandomAvatar(), // Utilisation de la nouvelle fonction
            },
            select: {
                id: true,
            },
        });

        return NextResponse.json(product);
    } catch (error) {
        console.error("Error creating product:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}