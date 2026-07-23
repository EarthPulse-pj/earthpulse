import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

  metadataBase: new URL("https://earthpulse-jade.vercel.app"),

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
    "green crypto",
    "community token",
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

    url: "https://earthpulse-jade.vercel.app",

    siteName: "EarthPulse",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "EarthPulse | One Planet. One Pulse. One Community.",
      },
    ],

  },


  twitter: {

    card: "summary_large_image",

    title:
      "EarthPulse | One Planet. One Pulse. One Community.",

    description:
      "Join the EarthPulse community and help build a greener future through Web3 culture.",

    images: [
      "/opengraph-image.png",
    ],

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