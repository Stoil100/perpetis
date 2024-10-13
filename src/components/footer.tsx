import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative text-white">
            <div className="absolute inset-0 h-full w-full bg-[url('/global/background.png')] bg-cover bg-center" />
            <div className="relative grid grid-cols-2 grid-rows-2 gap-4 bg-[#063971]/95 px-6 py-6 md:grid-cols-4 md:px-40 md:py-8">
                <div className="col-span- row-span-2 flex flex-col justify-between space-y-4 md:col-span-2">
                    <Link href={"#home"} className="w-fit">
                        <Image
                            src="/global/logo.png"
                            width={150}
                            height={150}
                            alt="Logo"
                        />
                    </Link>
                    <div className="text-sm sm:text-base md:text-lg">
                        <p>Твоят сервиз за ремонт на</p>
                        <p>бяла електротехника</p>
                    </div>
                </div>
                <div className="col-span-1 col-start-2 row-start-1 flex flex-wrap justify-between gap-2 text-sm font-bold sm:gap-4 sm:text-base md:col-span-2 md:col-start-3 md:row-start-1 md:text-xl">
                    <Link href="#hero" className="hover:underline">
                        Начало
                    </Link>
                    <Link href="#gallery" className="hover:underline">
                        Галерия
                    </Link>
                    <Link href="#location" className="hover:underline">
                        Локация
                    </Link>
                    <Link href="#location" className="hover:underline">
                        Контакт
                    </Link>
                </div>
                <div className="col-span-1 col-start-2 row-span-1 row-start-2 flex flex-col justify-end space-y-2 md:col-span-2 md:col-start-3 md:row-start-2 md:flex-row md:items-end md:justify-between">
                    <div className="text-sm sm:text-base md:text-lg">
                        <p>Локация</p>
                        <p>Ул. Свещаров 10, Варна</p>
                        <p>Васил Костадинов</p>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg">
                        &copy; {new Date().getFullYear()} - Copyright All Rights
                        Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
