import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/layout/Layout";

export const metadata = {
  title: "Arc Assignment",
  description: "Developed by Abhay Chandra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
