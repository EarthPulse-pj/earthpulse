import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

  metadataBase: new URL(
    "https://novagaia.vercel.app"
  ),


  title:
    "NovaGaia (NVGAI) | One Planet. One Intelligence. One Community.",


  description:
    "NovaGaia is a community-driven cryptocurrency ecosystem combining Artificial Intelligence, Blockchain Technology, Collective Intelligence, and Sustainable Innovation to build a smarter, safer, and more sustainable future.",


  keywords: [
    "NovaGaia",
    "NVGAI",
    "Solana",
    "crypto",
    "Web3",
    "AI",
    "Artificial Intelligence",
    "Blockchain",
    "Collective Intelligence",
    "Community Token",
    "Sustainability",
    "Innovation",
    "Decentralized Technology",
  ],


  authors: [
    {
      name: "NovaGaia",
    },
  ],


  creator:
    "NovaGaia",


  publisher:
    "NovaGaia",



  openGraph: {

    title:
      "NovaGaia (NVGAI) | One Planet. One Intelligence. One Community.",


    description:
      "A global community exploring AI, blockchain, and collective intelligence to create a smarter, safer, and more sustainable future.",


    type:
      "website",


    locale:
      "en_US",


    url:
      "https://novagaia.vercel.app",


    siteName:
      "NovaGaia",


    images: [
      {
        url:
          "/opengraph-image.png",

        width:
          1200,

        height:
          630,

        alt:
          "NovaGaia - One Planet. One Intelligence. One Community.",
      },
    ],

  },



  twitter: {

    card:
      "summary_large_image",


    title:
      "NovaGaia (NVGAI) | One Planet. One Intelligence. One Community.",


    description:
      "Join NovaGaia, a global community exploring AI, blockchain technology, and sustainable innovation.",


    images:
      [
        "/opengraph-image.png",
      ],

  },


};



export default function RootLayout({

  children,

}: Readonly<{

  children:
    React.ReactNode;

}>) {


  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>

  );

}