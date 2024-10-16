import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "@/components/topbar";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Перпетис сервиз - Ремонт на битова електроника",
    description:
        "Ремонт на платки за перални ➤ сушилни ➤ миялни ➤ хладилници ➤ фурни и климатици",
    keywords: [
        "българия",
        "варна",
        "варненски",
        "перпетис сервиз",
        "сервиз",
        "ремонт",
        "поправка",
        "поправяне",
        "битова техника",
        "техника",
        "електроника",
        "платка",
        "платки",
        "пералня",
        "перални",
        "сушилня",
        "сушилни",
        "миялна",
        "миялни",
        "хладилник",
        "хладилници",
        "фурна",
        "фурни",
        "климатик",
        "климатици",
    ],
    icons: [
        {
            rel: "icon",
            sizes: "any",
            url: "/favicon.ico",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon-16x16.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/apple-touch-icon.png",
        },
    ],
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Перпетис сервиз - Ремонт на битова електроника",
        description:
            "Ремонт на платки за перални ➤ сушилни ➤ миялни ➤ хладилници ➤ фурни и климатици",
        url: "https://www.perpetis-serviz.com/",
        siteName: "Perpetis-serviz.com",
        images: [
            {
                url: "/hero/AEG_DISPLAY_2_UP-16x9.png", // Заменете с реалния URL на изображението
                alt: "Перпетис сервиз - Ремонт на битова електроника",
            },
        ],
        locale: "bg_BG",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Перпетис сервиз",
        description:
            "Ремонт на платки за перални ➤ сушилни ➤ миялни ➤ хладилници ➤ фурни и климатици",
        // If you have a Twitter handle, include it here. Otherwise, you can omit the 'site' property.
        // site: "@YourTwitterHandle",
        images: [
            {
                url: "/global/electronics.svg", // Заменете с реалния URL на изображението
                alt: "Перпетис лого",
            },
        ],
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-helvetica flex flex-col overflow-x-hidden antialiased`}
            >
                <TopBar />
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
