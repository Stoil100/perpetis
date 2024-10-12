"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full px-4 py-4 text-[#063971] md:px-10 2xl:px-20">
            <nav className="flex w-full items-center justify-between">
                <Link href={"#home"} className="z-10 flex items-center">
                    <Image
                        src="/electronics.svg"
                        alt="Портетис"
                        width={36}
                        height={36}
                        className="mr-2"
                    />
                    <span className="text-3xl font-semibold">Перпетис</span>
                </Link>
                <div className="hidden space-x-8 text-lg md:flex lg:text-xl">
                    <Link
                        href="#hero"
                        className="rounded-full border-2 border-white bg-white px-5 py-2 transition-all hover:border-[#063971] hover:drop-shadow-[2px_3px_#8F8F8F]"
                    >
                        Начало
                    </Link>
                    <Link
                        href="#gallery"
                        className="rounded-full border-2 border-white bg-white px-5 py-2 transition-all hover:border-[#063971] hover:drop-shadow-[2px_3px_#8F8F8F]"
                    >
                        Галерия
                    </Link>
                    <Link
                        href="#location"
                        className="rounded-full border-2 border-white bg-white px-5 py-2 transition-all hover:border-[#063971] hover:drop-shadow-[2px_3px_#8F8F8F]"
                    >
                        Локация
                    </Link>
                    <Link
                        href="#location"
                        className="rounded-full border-2 border-[#063971] bg-[#063971] px-4 py-2 text-white drop-shadow-[2px_3px_#8F8F8F] transition-all hover:bg-white hover:text-[#063971]"
                    >
                        Контакти
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="bg-white px-4 py-2 text-center shadow-md md:hidden">
                    <Link
                        href="#hero"
                        className="mt-2 block rounded-full border-2 border-white bg-white px-5 py-2 transition-all hover:border-[#063971] hover:px-4 hover:drop-shadow-[2px_3px_#8F8F8F]"
                    >
                        Начало
                    </Link>
                    <Link
                        href="#gallery"
                        className="mt-2 block rounded-full border-2 border-white bg-white px-5 py-2 transition-all hover:border-[#063971] hover:px-4 hover:drop-shadow-[2px_3px_#8F8F8F]"
                    >
                        Галерия
                    </Link>
                    <Link
                        href="#location"
                        className="mt-2 block rounded-full border-2 border-white bg-white px-5 py-2 transition-all hover:border-[#063971] hover:px-4 hover:drop-shadow-[2px_3px_#8F8F8F]"
                    >
                        Локация
                    </Link>
                    <Link
                        href="#location"
                        className="mt-2 block rounded-full border-2 border-[#063971] bg-[#063971] px-4 py-2 text-white drop-shadow-[2px_3px_#8F8F8F] transition-all hover:bg-white hover:text-[#063971]"
                    >
                        Контакти
                    </Link>
                </div>
            )}
        </header>
    );
}
