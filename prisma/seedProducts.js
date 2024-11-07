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

        // Sélectionner un type, un language et une license aléatoires
        const types = ["REST API", "GraphQL API", "Webhook"];
        const languages = ["JavaScript", "Python", "Ruby", "Go", "Java"];
        const licenses = ["MIT", "Apache 2.0", "GPL v3", "BSD 3-Clause"];

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
            type: types[Math.floor(Math.random() * types.length)], // Ajoute le type
            language: languages[Math.floor(Math.random() * languages.length)], // Ajoute le language
            license: licenses[Math.floor(Math.random() * licenses.length)], // Ajoute la license
            likecount: Math.floor(Math.random() * 1000).toString() // Convertir le nombre en chaîne de caractères
        };
    });

    await prisma.product.createMany({
        data: fakeProducts,
    });

    console.log('20 fake API products with categories, types, languages, licenses and likecount have been created for testing.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });