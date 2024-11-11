import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";
import HeaderNavbar from "../components/Navbar/Navbar";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Sorting Zindagi",
  description: "Sorting Zindagi by Dr Deepak",
  icons: {
    icon: "/images/logo.svg",
  },
};

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
