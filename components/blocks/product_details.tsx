import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { EmptyPlaceholder } from "../empty-placeholder";
import { PostCreateButton } from "../post-create-button";
import { Boxes, ArrowBigLeft, BookOpen, Briefcase, Code2, Codepen, Flower, Heart, Lightbulb, MountainSnow, Settings, TerminalSquare, GitPullRequest } from "lucide-react";
import { Button } from "../ui/button";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import formatDistanceStrict from "date-fns/formatDistanceStrict";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    link: string;
    type: string,
    language: string,
    license: string,
    likecount: string,
    createdAt: string
}

interface ProductDetailProps {
    params: { id: string };
}

const ProductDetails = ({ params }: ProductDetailProps) => {


    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${params.id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product details:", error);
                setError("Could not load product details");
                setLoading(false);
            }
        };

        fetchProduct();
    }, [params.id]);

    if (loading) {
        <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No api created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
                You don&apos;t have any api yet. Explore the market place.
            </EmptyPlaceholder.Description>
            <PostCreateButton variant="outline" />
        </EmptyPlaceholder>
    }

    if (error || !product) {
        return (
            <div className="container py-8">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-red-500">{error}</h2>
                    <button
                        onClick={() => router.back()}
                        className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }
    const timeAgo = formatDistanceStrict(new Date(product.createdAt), new Date(), { addSuffix: true });

    return (
        <section>
            <div className="flex w-full flex-col items-center pb-8  md:flex-row md:pb-10 lg:pb-16">

                <article className="prose dark:prose-invert prose-sm">
                    <button
                        onClick={() => router.back()}
                        className="mt-4 py-1 rounded-md"
                    >
                        ← Go Back
                    </button>


                    <div className="flex flex-col items-start gap-2 md:flex-row md:items-start md:justify-between">
                        <h1 className="font-mono text-basic">{product.name}</h1>
                        <div className="flex flex-wrap gap-2 justify-start">

                            <Button variant={"outline"} size={"xs"}>
                                <GitPullRequest className="flex-shrink-0 w-3 h-auto" />
                                Request
                            </Button>
                            <Button variant={"secondary"} size={"xs"}>
                                <TerminalSquare className="flex-shrink-0 w-3 h-auto" />
                                Test
                            </Button>
                            <Button variant={"default"} size={"xs"} className="bg-blue-600 text-white hover:bg-blue-600">
                                Use this API
                            </Button>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{timeAgo}</p>
                    <p>
                        {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-start">
                        <Button variant={"outline"} size={"sm"}>
                            <Boxes className="flex-shrink-0 w-3 h-auto text-yellow-400" />
                            {product.category}
                        </Button>
                        <Button variant={"outline"} size={"sm"}>
                            <Code2 className="flex-shrink-0 w-3 h-auto text-blue-400" />
                            {product.language}
                        </Button>
                        <Button variant={"outline"} size={"sm"}>
                            <BookOpen className="flex-shrink-0 w-3 h-auto text-purple-400" />
                            {product.license}
                        </Button>
                        <Button variant={"outline"} size={"sm"}>
                            <Heart className="flex-shrink-0 w-3 h-auto text-red-500" />
                            {product.likecount}
                        </Button>
                    </div>

                    <h2>Docs</h2>
                    <p>
                        The king thought long and hard, and finally came up with{' '}
                        <a href="#">a brilliant plan</a>: he would tax the jokes in the
                        kingdom.
                    </p>
                    <blockquote>
                        &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good
                        joke, so it&apos;s only fair that they should pay for the
                        privilege.&rdquo;
                    </blockquote>
                    <pre className="bg-secondary text-primary p-4 rounded-md overflow-x-auto">
                        <code className="whitespace-pre language-python">
                            {`const greeting: string = "Hello, world!";
console.log(greeting);`}
                        </code>
                    </pre>

                    <h3>The Joke Tax</h3>
                    <p>
                        The king&apos;s subjects were not amused. They grumbled and
                        complained, but the king was firm:
                    </p>
                    <ul>
                        <li>1st level of puns: 5 gold coins</li>
                        <li>2nd level of jokes: 10 gold coins</li>
                        <li>3rd level of one-liners : 20 gold coins</li>
                    </ul>
                    <p>
                        As a result, people stopped telling jokes, and the kingdom fell into
                        a gloom. But there was one person who refused to let the king&apos;s
                        foolishness get him down: a court jester named Jokester.
                    </p>
                    <h3>Jokester&apos;s Revolt</h3>
                    <p>
                        Jokester began sneaking into the castle in the middle of the night
                        and leaving jokes all over the place: under the king&apos;s pillow,
                        in his soup, even in the royal toilet. The king was furious, but he
                        couldn&apos;t seem to stop Jokester.
                    </p>
                    <p>
                        And then, one day, the people of the kingdom discovered that the
                        jokes left by Jokester were so funny that they couldn&apos;t help
                        but laugh. And once they started laughing, they couldn&apos;t stop.
                    </p>
                    <h3>The People&apos;s Rebellion</h3>
                    <p>
                        The people of the kingdom, feeling uplifted by the laughter, started
                        to tell jokes and puns again, and soon the entire kingdom was in on
                        the joke.
                    </p>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>King&apos;s Treasury</th>
                                    <th>People&apos;s happiness</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="m-0 border-t border-l border-r  p-0 even:bg-muted">
                                    <td className="pl-3">Empty</td>
                                    <td >Overflowing</td>
                                </tr>
                                <tr className="m-0 border-t border-l border-r p-0 even:bg-muted">
                                    <td className="pl-3">Modest</td>
                                    <td>Satisfied</td>
                                </tr>
                                <tr className="m-0 border-t border-l border-b border-r p-0 even:bg-muted">
                                    <td className="pl-3">Full</td>
                                    <td>Ecstatic</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        The king, seeing how much happier his subjects were, realized the
                        error of his ways and repealed the joke tax. Jokester was declared a
                        hero, and the kingdom lived happily ever after.
                    </p>
                    <p>
                        The moral of the story is: never underestimate the power of a good
                        laugh and always be careful of bad ideas.
                    </p>
                </article>
                <aside className="mr-6 mb-8 w-full self-start pt-10 md:sticky md:ml-8 md:w-fit md:min-w-64 md:flex-1 lg:ml-10 lg:shrink-0 2xl:w-full">
                    <div className="">
                        <div className="hidden w-full md:mt-1 md:block">
                        </div>
                    </div>
                    <div className="flex flex-col rounded-xl border border-border bg-accent py-6 md:py-8">
                        <div className="md:mb-4.5 mb-6 px-6 font-medium leading-5">
                            About {product.name}
                        </div>
                        <div className="mb-5 px-6 last:mb-0">
                            <div className="mb-2 text-xs font-semibold">Company</div>
                            <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                                Suspendisse vel euismod sem. Sed sollicitudin augue eu facilisis
                                scelerisque. Nullam pharetra tortor ut massa accumsan egestas.
                            </div>
                        </div>
                        <div className="mb-5 px-6 last:mb-0">
                            <div className="mb-2 text-xs font-semibold">Industry</div>
                            <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                                Suspendisse volutpat
                            </div>
                        </div>
                        <div className="mb-5 border-t border-border px-6 pt-5 last:mb-0">
                            <div className="mb-2 text-xs font-semibold">Location</div>
                            <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                                London, United Kingdom
                            </div>
                        </div>
                        <div className="mb-5 px-6 last:mb-0">
                            <div className="mb-2 text-xs font-semibold">Company size</div>
                            <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                                11-50
                            </div>
                        </div>
                        <div className="mb-5 px-6 last:mb-0">
                            <div className="mb-2 text-xs font-semibold">Website</div>
                            <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                                <a href="#" className="underline hover:text-foreground">
                                    https://example.com/
                                </a>
                            </div>
                        </div>
                        <div className="mb-5 px-6 last:mb-0">
                            <div className="mb-2 text-xs font-semibold">Topics</div>
                            <div className="overflow-hidden text-xs text-muted-foreground md:text-sm">
                                Sed sollicitudin augue eu facilisis scelerisque
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default ProductDetails;