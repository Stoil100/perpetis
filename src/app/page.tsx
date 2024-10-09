"use client";

import ToolsCarousel from "@/components/toolsCarousel";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Tools } from "@/types/tool";
import {
    ArrowLeft,
    ArrowRight,
    Briefcase,
    MapPin,
    PhoneCall,
} from "lucide-react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

function HeroSection() {
    const images = [
        { src: "/logo.png", alt: "Bosch Inverter", serNo: "215 789 3458" },
        { src: "/background.png", alt: "Bosch Not Inverter" },
        { src: "/logo.png", alt: "Bosch Inverter", serNo: "215 789 3458" },
    ];
    const [next, setNext] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const autoplayDelay = 6000;

    useEffect(() => {
        if (!api) {
            return;
        }
        setNext(api.selectedScrollSnap() + 1);
        api.on("select", () => {
            setNext(
                api.selectedScrollSnap() + 1 === images.length
                    ? 0
                    : api.selectedScrollSnap() + 1,
            );
        });
    }, [api]);

    return (
        <section
            id="hero"
            className="flex flex-col gap-2 py-8 md:flex-row md:gap-6"
        >
            <div className="flex flex-col justify-between md:w-1/3">
                <div className="flex flex-col-reverse md:block">
                    <div className="flex items-center">
                        <hr className="w-full border-[#063971]" />
                        <p className="ml-6 text-nowrap py-2 text-xl">
                            Перпетис Сервиз
                        </p>
                    </div>
                    <div className="z-10 text-[2.4rem] md:absolute md:text-[3.9vw]">
                        <span className="inline-block rounded-t-3xl rounded-br-3xl bg-white pr-4">
                            Твоят сервиз за бяла
                        </span>
                        <br />
                        <div className="flex">
                            <span className="inline-block rounded-b-3xl bg-white pr-4">
                                електротехника
                            </span>
                            <div className="hidden md:block">
                                <img src="/shape.svg" className="w-5" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden space-y-2 md:block md:space-y-4 lg:space-y-16">
                    <div className="space-y-2">
                        <p>Нуждаете се от ремонт на бяла електротехника</p>
                        <Button className="rounded-full bg-[#063971] text-xl">
                            Контакт
                        </Button>
                    </div>

                    <div className="w-fit space-x-4">
                        {api && images && (
                            <>
                                <Button
                                    variant="outline"
                                    className="h-fit w-fit rounded-full border-2 border-[#0C71E0] p-1"
                                    onClick={() => {
                                        api!.scrollPrev();
                                    }}
                                >
                                    <ArrowLeft color="#0C71E0" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-fit w-fit rounded-full border-2 border-[#063971] p-1"
                                    onClick={() => {
                                        api!.scrollNext();
                                    }}
                                >
                                    <ArrowRight color="#063971" />
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: autoplayDelay,
                        stopOnInteraction: false,
                        stopOnMouseEnter: false,
                        stopOnFocusIn: false,
                        stopOnLastSnap: false,
                    }),
                ]}
                opts={{
                    loop: true,
                    watchDrag: screen.height < 640 ? true : false,
                    align: "start",
                }}
                setApi={setApi}
                className="w-full"
            >
                <CarouselContent className="ml-0 aspect-video">
                    {images.map((image, index) => (
                        <CarouselItem
                            key={index}
                            className="flex items-center justify-center rounded-xl bg-gray-500 pl-0 sm:rounded-3xl lg:rounded-[50px]"
                        >
                            <img src={image.src} className="h-full w-full" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {api && images && (
                    <>
                        <div
                            onClick={() => {
                                api?.scrollNext();
                            }}
                            className="absolute bottom-4 left-4 hidden h-1/3 w-fit max-w-96 cursor-pointer gap-2 rounded-xl bg-white p-2 drop-shadow-[2px_3px_#8F8F8F] transition-transform hover:scale-105 sm:flex lg:h-1/4 lg:rounded-[30px] lg:p-3"
                        >
                            <img
                                src={images[next].src}
                                className="aspect-square h-full rounded bg-gray-500 lg:rounded-[20px]"
                            />
                            <div className="md:text-md flex h-full flex-col justify-between overflow-hidden text-ellipsis">
                                <p className="text-gray-400">Следваща снимка</p>
                                <h4 className="lg:text-xl">
                                    {images[next].alt}
                                </h4>
                                <p>Ser. No {images[next].serNo}</p>
                            </div>
                        </div>

                        <div className="absolute bottom-4 right-8 lg:bottom-8">
                            <div className="hidden w-full gap-2 md:flex">
                                {images.map((_, index) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            "h-1 w-4 cursor-pointer rounded-full bg-[#0C71E0] drop-shadow-lg transition-all",
                                            api?.selectedScrollSnap() ===
                                                index && "w-6 bg-[#063971]",
                                        )}
                                        onClick={() => {
                                            api?.scrollTo(index);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </Carousel>
            <Button className="rounded-full bg-[#063971] text-xl drop-shadow-[2px_2px_#8F8F8F] md:hidden">
                Контакт
            </Button>
        </section>
    );
}

function GallerySection() {
    const tools: Tools = [
        {
            title: "Bosch",
            images: [
                "/logo.png",
                "/logo.png",
                "/logo.png",
                "/logo.png",
                "/logo.png",
                "/logo.png",
            ],
        },
    ];
    return (
        <section id="gallery" className="flex w-full flex-col items-center">
            <h1 className="max-w-4xl text-center text-4xl md:text-6xl">
                Ремонтни дейности на редица производители
            </h1>
            {tools.map((tool, index) => (
                <ToolsCarousel key={index} {...tool} />
            ))}
        </section>
    );
}
function LocationSection() {
    return (
        <section
            id="location"
            className="flex flex-col items-center justify-around gap-8 py-4 md:text-xl lg:flex-row"
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.732935299655!2d27.915633569806786!3d43.21851176439716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4546c3f4749f9%3A0xfc264caf43ad9b6d!2z0JLQsNGA0L3QsCDQptC10L3RgtGK0YDQn9GA0LjQvNC-0YDRgdC60LgsINGD0LsuIOKAntCf0L7Qu9C60L7QstC90LjQuiDQodCy0LXRidCw0YDQvtCy4oCcIDEwLCA5MDAyINCS0LDRgNC90LA!5e0!3m2!1sbg!2sbg!4v1727845336376!5m2!1sbg!2sbg"
                className="h-[300px] w-full max-w-[800px] rounded-xl border-none md:h-[600px] md:rounded-[70px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="space-y-6">
                <div className="w-full space-y-4 rounded-3xl border-2 border-[#063971] px-4 py-2">
                    Можете да намерите сервиза на адрес:
                    <br />
                    Ул. Свещаров 10
                </div>
                <div className="w-full space-y-4 rounded-3xl border-2 border-[#063971] px-4 py-2">
                    <div className="flex items-center gap-1">
                        <img src="/viber.svg" width={36} />
                        <p>
                            Моля свържете се с мен чрез{" "}
                            <span className="font-bold text-purple-500 underline">
                                Viber
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <PhoneCall />
                        <p>+359 897 324 465</p>
                    </div>
                </div>
                <div className="w-full space-y-4 rounded-3xl border-2 border-[#063971] px-4 py-2">
                    <div className="flex items-center gap-1">
                        <MapPin />
                        <p>
                            Ул. <cite>Полковник Свещаров</cite> 10 Варна,
                            България
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Briefcase />
                        <p>Понеделник до Петък</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default function Home() {
    return (
        <main className="lg::px-20 min-h-screen px-4 text-[#063971] md:px-10">
            <HeroSection />
            <GallerySection />
            <LocationSection />
        </main>
    );
}
