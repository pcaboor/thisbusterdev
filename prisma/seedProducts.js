import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Fonction pour générer une image SVG aléatoire avec un dégradé de couleurs
function generateRandomAvatar() {
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
function getRandomColor() {
    // Générer une teinte aléatoire
    const hue = Math.floor(Math.random() * 360);
    // Saturation et luminosité fixes pour un dégradé élégant
    return `hsl(${hue}, 70%, 60%)`;
}

async function main() {
    // Catégories étendues pour plus de diversité
    const categories = [
        { name: "Analytics" },
        { name: "Security" },
        { name: "Messaging" },
        { name: "E-commerce" },
        { name: "Finance" },
        { name: "Healthcare" },
        { name: "Education" },
        { name: "Social Media" },
        { name: "Travel" },
        { name: "Logistics" },
        { name: "Media & Entertainment" },
    ];

    // Créez 100 produits factices avec plus de diversité
    const fakeProducts = Array.from({ length: 100 }, (_, i) => {
        // Sélectionner une catégorie aléatoire
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];

        // Sélectionner un type, un langage et une licence aléatoires
        const types = ["REST API", "GraphQL API", "Webhook", "SOAP API", "gRPC"];
        const languages = ["JavaScript", "Python", "Ruby", "Go", "Java", "PHP", "C#", "Swift", "Kotlin", "TypeScript"];
        const licenses = ["MIT", "Apache 2.0", "GPL v3", "BSD 3-Clause", "Proprietary", "LGPL"];

        // Utilisation de la fonction pour générer une image SVG aléatoire
        const imageUrl = generateRandomAvatar();

        return {
            name: `API Product ${i + 1}`,
            description: `This is a description for API Product ${i + 1}. It provides excellent functionality and meets all API standards.`,
            price: Math.round((Math.random() * 200 + 5) * 100) / 100, // Génère un prix entre 5.00 et 205.00
            currency: "USD",
            active: Math.random() > 0.2, // 80% de chance que le produit soit actif
            requestLimit: Math.floor(Math.random() * 10000) + 500, // Limite de requêtes aléatoire entre 500 et 10500
            bandwidthLimit: Math.floor(Math.random() * 5000) + 200, // Bande passante aléatoire entre 200 et 5200 Mo
            stripeProductId: `stripe_prod_${i + 1}`,
            stripePriceId: `stripe_price_${i + 1}`,
            category: randomCategory.name, // Ajoute la catégorie
            type: types[Math.floor(Math.random() * types.length)], // Ajoute le type
            language: languages[Math.floor(Math.random() * languages.length)], // Ajoute le langage
            license: licenses[Math.floor(Math.random() * licenses.length)], // Ajoute la licence
            likecount: Math.floor(Math.random() * 5000), // Nombre de likes aléatoire entre 0 et 5000
            image: imageUrl, // Ajoute l'image aléatoire
        };
    });

    // Insérer les produits dans la base de données
    await prisma.product.createMany({
        data: fakeProducts,
    });

    console.log('100 fake API products with random color avatars, more diversity in categories, types, languages, licenses, and likecount have been created for testing.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
