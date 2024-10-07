"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full py-4 text-[#063971]  ">
            <nav className="flex w-full items-center justify-between px-4 md:px-8">
                <div className="flex items-center z-10">
                    <Image
                        src="/electronics.svg"
                        alt="Портетис"
                        width={36}
                        height={36}
                        className="mr-2"
                    />
                    <span className="font-semibold text-3xl">Перпетис</span>
                </div>
                <div className="hidden md:flex space-x-8 text-lg lg:text-xl">
                    <Link
                        href="#"
                        className="rounded-full border-2 border-white bg-white px-5 py-2 transition-all hover:border-[#063971] hover:px-4 hover:drop-shadow-[2px_3px_#8F8F8F]"
                    >
                        Начало
                    </Link>
                    <Link
                        href="#"
                        className="rounded-full border-2 border-white bg-white px-5 py-2 transition-all hover:border-[#063971] hover:drop-shadow-[2px_3px_#8F8F8F]"
                    >
                        Галерия
                    </Link>
                    <Link
                        href="#"
                        className="rounded-full border-2 border-white bg-white px-5 py-2 transition-all hover:border-[#063971] hover:drop-shadow-[2px_3px_#8F8F8F]"
                    >
                        Локация
                    </Link>
                    <Link
                        href="#"
                        className="rounded-full border-2 border-[#063971] bg-[#063971] px-4 py-2 text-white drop-shadow-[2px_3px_#8F8F8F] transition-all hover:bg-white hover:text-[#063971]"
                    >
                        Контакти
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
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
                <div className="md:hidden text-center px-4 py-2 bg-white shadow-md">
                    <Link
                        href="#"
                        className="block rounded-full border-2 border-white bg-white px-5 py-2 mt-2 transition-all hover:border-[#063971] hover:px-4 hover:drop-shadow-[2px_3px_#8F8F8F]"
                    >
                        Начало
                    </Link>
                    <Link
                        href="#"
                        className="block rounded-full border-2 border-white bg-white px-5 py-2 mt-2 transition-all hover:border-[#063971] hover:px-4 hover:drop-shadow-[2px_3px_#8F8F8F]"
                    >
                        Галерия
                    </Link>
                    <Link
                        href="#"
                        className="block rounded-full border-2 border-white bg-white px-5 py-2 mt-2 transition-all hover:border-[#063971] hover:px-4 hover:drop-shadow-[2px_3px_#8F8F8F]"
                    >
                        Локация
                    </Link>
                    <Link
                        href="#"
                        className="block rounded-full border-2 border-[#063971] bg-[#063971] px-4 py-2 mt-2 text-white drop-shadow-[2px_3px_#8F8F8F] transition-all hover:bg-white hover:text-[#063971]"
                    >
                        Контакти
                    </Link>
                </div>
            )}
        </header>
    );
}
