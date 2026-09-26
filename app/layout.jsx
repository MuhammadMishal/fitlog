import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WorkoutProvider from "@/context/WorkoutContext";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Fitlog",
  description: "Train with intent. Log every set.",
};

const guestFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${guestFont.className}`}>
        <WorkoutProvider>
          <Navbar></Navbar>
          <main className="flex-1 bg-black">{children}</main>
          <Footer></Footer>
          <ToastContainer />
        </WorkoutProvider>
      </body>
    </html>
  );
}
