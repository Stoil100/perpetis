"use client";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Tool } from "@/types/tool";
import { useEffect, useState } from "react";
export default function ToolsCarousel({ ...tool }: Tool) {
    const [progress, setProgress] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    useEffect(() => {
        if (!api) {
            return;
        }
        const updateProgressBar = () => {
            const progress = api!.scrollProgress();
            setProgress(progress * 100);
        };

        api!.on("scroll", updateProgressBar);
        return () => {
            api!.destroy();
        };
    }, [api]);
    return (
        <div className="w-full py-8">
            <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-end">
                <p className="text-2xl md:text-4xl">{tool.title}</p>
                <Carousel
                    setApi={setApi}
                    opts={{
                        dragFree: true,
                        loop: true,
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="ml-0 gap-4">
                        {tool.images.map((image, index) => (
                            <CarouselItem
                                key={index}
                                className="flex aspect-video max-w-[300px] justify-center rounded-2xl border-b-2 border-gray-400 bg-gray-400 px-0 first:ml-4 md:max-w-[400px]"
                            >
                                <img
                                    src={`/gallery/${tool.title.toLowerCase()}/${image}`}
                                    alt={image}
                                    className="w-full"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="relative mt-4 h-1 w-full bg-[#0C71E0]">
                <div
                    className="progress-bar-fill h-full bg-[#063971]"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
}
