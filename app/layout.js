import Nav from "./_components/Nav";
import "./globals.css";
import { Kalam } from "next/font/google";

const font = Kalam({
  weight: ["400"],
  subset: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${font.className} bg-gray-800 text-white flex flex-col justify-center items-center gap-y-5`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
