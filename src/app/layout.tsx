import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const GA_TRACKING_ID = process.env.GOOGLE_TAG_ID; 


const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Compute Estates',
  description: 'Software Solutions Startup',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <GoogleTagManager gtmId='G-VERZYXMRKP' />
        {children}
      </body>
    </html>
  );
}
