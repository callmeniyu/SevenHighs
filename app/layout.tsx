import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Poppins } from "next/font/google";


const gTWalsheim = localFont({
  src: [
    {
      path: './fonts/GT-Walsheim-Ultra-Bold-Trial.otf',
      weight: '900', 
      style: 'normal', 
    },
  ],
  display: 'swap',
  variable: '--font-GT-Walsheim', 
})

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '700',], 
  variable: '--font-poppins', 
  display: 'swap', 
});



export const metadata: Metadata = {
  title: "Seven Heighs",
  description: "The Ultimate Real Estate Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${gTWalsheim.variable} ${poppins.variable}`}>
      {children}
      </body>
    </html>
  );
}
