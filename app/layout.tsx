import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

  metadataBase: new URL("http://localhost:3000"),

  title:
    "EarthPulse | One Planet. One Pulse. One Community.",

  description:
    "EarthPulse is a community-driven meme coin created to inspire environmental awareness, sustainability, and positive global action through Web3 culture.",

  keywords: [
    "EarthPulse",
    "PULSE",
    "meme coin",
    "crypto",
    "Solana",
    "Web3",
    "environment",
    "sustainability",
  ],

  authors: [
    {
      name: "EarthPulse",
    },
  ],

  creator: "EarthPulse",


  openGraph: {

    title:
      "EarthPulse | One Planet. One Pulse. One Community.",

    description:
      "A community-powered meme coin focused on environmental awareness, sustainability, and global community participation.",

    type: "website",

    locale: "en_US",

  },


  twitter: {

    card: "summary_large_image",

    title:
      "EarthPulse | One Planet. One Pulse. One Community.",

    description:
      "Join the EarthPulse community and help build a greener future through Web3 culture.",

  },


};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>

  );

}