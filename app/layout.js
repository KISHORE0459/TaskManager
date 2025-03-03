import Nav from "./_components/Nav";
import "./globals.css";
import { Kalam } from "next/font/google";
import { Toaster } from "react-hot-toast";

const font = Kalam({
  weight: ["400"],
  subset: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${font.className} bg-gray-800 text-white flex flex-col justify-center items-center gap-y-5 h-auto`}
      >
        <Toaster position="top-center" />
        <Nav />
        {children}
      </body>
    </html>
  );
}
