import Image from "next/image";
import Link from "next/link";
import logo from "../../public/global/logo.png";
export default function Footer() {
    return (
        <footer className="relative mt-10 text-white">
            <div className="absolute inset-0 h-full w-full bg-[url('/global/background.png')] bg-cover bg-center" />
            <div className="relative grid grid-cols-2 grid-rows-2 gap-4 bg-[#063971]/95 px-4 py-6 md:grid-cols-4 md:px-20 md:py-8 lg:px-40">
                <div className="col-span-1 row-span-2 flex flex-col items-center justify-center space-y-4 sm:items-start md:col-span-2">
                    <Link href={"#home"} className="max-w-40 sm:max-w-60">
                        <Image src={logo} alt="Logo" />
                    </Link>
                    {/* <div className="text-sm sm:text-base md:text-lg">
                        <p>Твоят сервиз за битова</p>
                        <p>и нестандартна електротехника</p>
                    </div> */}
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
                        <p>
                            Ул. <q className="mr-2 italic">Полк. Свещаров</q>10,
                            <br /> Варна, България
                        </p>
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
