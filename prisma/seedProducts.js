import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Catégories et icônes factices avec couleurs associées
    const categories = [
        { name: "Analytics" },
        { name: "Security" },
        { name: "Messaging" },
        { name: "E-commerce" },
        { name: "Finance" },
    ];

    // Créez 20 produits factices
    const fakeProducts = Array.from({ length: 20 }, (_, i) => {
        // Sélectionner une catégorie aléatoire
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];

        return {
            name: `API Product ${i + 1}`,
            description: `This is a description for API Product ${i + 1}. It provides excellent functionality and meets all API standards.`,
            price: Math.round((Math.random() * 100 + 10) * 100) / 100, // Génère un prix entre 10.00 et 110.00
            currency: "USD",
            active: true,
            requestLimit: Math.floor(Math.random() * 5000) + 1000, // Limite de requêtes aléatoire entre 1000 et 6000
            bandwidthLimit: Math.floor(Math.random() * 1000) + 100, // Bande passante aléatoire entre 100 et 1100 Mo
            stripeProductId: `stripe_prod_${i + 1}`,
            stripePriceId: `stripe_price_${i + 1}`,
            category: randomCategory.name, // Ajoute la catégorie
        };
    });

    await prisma.product.createMany({
        data: fakeProducts,
    });

    console.log('20 fake API products with categories and icons have been created for testing.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
