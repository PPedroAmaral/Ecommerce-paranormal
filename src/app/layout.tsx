import "./globals.css";
import { Navbar } from "@/components/Navbar";
/*import { ThemeProvider } from "@/components/ThemeProvider"; */
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* <ThemeProvider /> */}
        <CartProvider>
          <Navbar /> 
          <main className="min-h-screen px-10 py-8">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
