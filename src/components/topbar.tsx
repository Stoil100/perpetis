export default function TopBar() {
    return (
        <div className="w-full px-4 md:px-10 2xl:px-20">
            <div className="flex w-full self-center rounded-b-2xl bg-[#063971] px-4 py-1 text-xs uppercase drop-shadow-[3px_3px_#8F8F8F] sm:py-2 md:rounded-b-3xl lg:text-2xl">
                <p className="mr-2 whitespace-nowrap text-white">
                    Ремонт на платки за
                </p>
                <div className="w-full overflow-hidden">
                    <div className="ml-2 inline-flex w-full flex-nowrap overflow-hidden text-white [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_256px,_black_calc(100%-256px),transparent_100%)]">
                        <ul className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4 md:[&_li]:mx-8">
                            <li>Перални</li>
                            <li>Сушилни</li>
                            <li>Миялни</li>
                            <li>Хладилници</li>
                            <li>Фурни</li>
                            <li>Климатици</li>
                        </ul>
                        <ul
                            className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4 md:[&_li]:mx-8"
                            aria-hidden="true"
                        >
                            <li>Перални</li>
                            <li>Сушилни</li>
                            <li>Миялни</li>
                            <li>Хладилници</li>
                            <li>Фурни</li>
                            <li>Климатици</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
