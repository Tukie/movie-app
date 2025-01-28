import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomTheme from "./components/CustomTheme";
import "animate.css";
import Sidebar from "./components/Sidebar";
import Image from "next/image";
import TabBar from "./components/TabBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Movie App",
  description: "Movie App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-20">
          <Image
            src={"/bg.jpg"}
            width={1200}
            height={1200}
            priority
            alt="Background"
            className="w-full h-full object-cover blur-lg opacity-5 fixed"
          />
        </div>

        <CustomTheme>
          <div className="flex gap-8 py-8 px-8 xl:px-5 max-w-[90rem] mx-auto">
            <TabBar />
            <div className="hidden sm:block shrink-0">
              <Sidebar />
            </div>
            <div className="min-h-dvh w-full overflow-hidden">{children}</div>
          </div>
        </CustomTheme>
      </body>
    </html>
  );
}
