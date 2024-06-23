import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-carbon flex flex-col h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
