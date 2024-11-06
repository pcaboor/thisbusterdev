'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '../../components/ui/button';
import type { CarouselApi } from '../../components/ui/carousel';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '../../components/ui/carousel';
import React from 'react';
import ScrollingMultilingualText from './scrolling_text';

const data = [
    {
        id: 'item-1',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        href: '#',
        image: 'https://i.pinimg.com/564x/db/16/45/db1645cc1ed95625a5dff41ee9a0f164.jpg',
    },
    {
        id: 'item-2',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        href: '#',
        image: 'https://i.pinimg.com/564x/59/4f/11/594f11dbf415baa52c82a80c1b21fc34.jpg',
    },
    {
        id: 'item-3',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        href: '#',
        image: 'https://i.pinimg.com/564x/4e/ff/66/4eff66d1e7fa56ba26d4c87b65cdd1ec.jpg',
    },
    {
        id: 'item-4',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        href: '#',
        image: 'https://i.pinimg.com/564x/95/d5/0d/95d50dd7b1686da8c38396095ec5c96d.jpg',
    },
    {
        id: 'item-5',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'item-6',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'item-7',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'item-8',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'item-9',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'item-10',
        title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
        summary:
            'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
        href: '#',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
];

const messages = {
    en: 'Welcome',
    fr: 'Bienvenue',
    es: 'おはよう',
    de: 'Willkommen',
    it: 'Benvenuto',
};


const DashboardBlock1 = () => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
        };
        updateSelection();
        carouselApi.on('select', updateSelection);
        return () => {
            carouselApi.off('select', updateSelection);
        };
    }, [carouselApi]);
    return (
        <section className="pb-10">
            {/*className="container" */}
            <div >
                <div className="flex flex-col justify-between md:mb-6 md:flex-row md:items-end ">
                    <div>
                        <h2 className="bounce mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">Hello</h2>
                        {/*<ScrollingMultilingualText texts={messages} interval={3000} /> */}
                    </div>
                    <div className="flex shrink-0 items-center justify-center gap-2">
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => {
                                carouselApi?.scrollPrev();
                            }}
                            disabled={!canScrollPrev}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => {
                                carouselApi?.scrollNext();
                            }}
                            disabled={!canScrollNext}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        breakpoints: {
                            '(max-width: 768px)': {
                                dragFree: true,
                            },
                        },
                    }}
                >
                    {/* className="ml-[calc(theme(container.padding)-20px)] mr-[calc(theme(container.padding))] 2xl:ml-[calc(50vw-700px+theme(container.padding)-20px)] 2xl:mr-[calc(50vw-700px+theme(container.padding))]" */}
                    <CarouselContent>
                        {data.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="pl-[20px] md:max-w-[152px]"
                            >
                                <a
                                    href={item.href}
                                    className="group flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex aspect-[3/2] text-clip rounded-xl">
                                            <div className="flex-1">
                                                <div className="relative size-full origin-bottom transition duration-300 group-hover:scale-105">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="size-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-2 line-clamp-3 break-words pt-4 text-xs font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                                        {item.title}
                                    </div>
                                    <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-m lg:mb-9">
                                        {item.summary}
                                    </div>
                                    <div className="flex items-center text-sm">
                                        Read more{' '}
                                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default DashboardBlock1;
