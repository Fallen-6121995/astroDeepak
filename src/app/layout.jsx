import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";
import HeaderNavbar from "../components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";


export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <HeaderNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
