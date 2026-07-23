"use client";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);


  const links = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Tokenomics",
      href: "#tokenomics",
    },
    {
      name: "Roadmap",
      href: "#roadmap",
    },
    {
      name: "Community",
      href: "#community",
    },
  ];


  return (
    <nav
      className="
      fixed
      top-0
      z-50
      w-full
      border-b
      border-green-900
      bg-black/70
      backdrop-blur-md
      "
    >


      <div
        className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        px-6
        py-4
        "
      >


        {/* Logo */}

        <a
          href="#home"
          className="
          text-2xl
          font-extrabold
          text-green-400
          "
        >
          🌎 EarthPulse
        </a>




        {/* Desktop Menu */}

        <div
          className="
          hidden
          items-center
          gap-8
          md:flex
          "
        >

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="
              text-gray-300
              transition
              hover:text-green-400
              "
            >
              {link.name}
            </a>

          ))}



          <button
            className="
            rounded-xl
            bg-green-500
            px-5
            py-2
            font-bold
            text-black
            transition
            hover:bg-green-400
            "
          >
            Buy PULSE
          </button>


        </div>





        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
          text-3xl
          text-green-400
          md:hidden
          "
        >
          ☰
        </button>


      </div>






      {/* Mobile Menu */}

      {open && (

        <div
          className="
          flex
          flex-col
          gap-5
          border-t
          border-green-900
          bg-black
          px-6
          py-6
          md:hidden
          "
        >


          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
              text-gray-300
              hover:text-green-400
              "
            >
              {link.name}
            </a>

          ))}




          <button
            className="
            rounded-xl
            bg-green-500
            px-5
            py-3
            font-bold
            text-black
            "
          >
            Buy EPULSE
          </button>


        </div>

      )}


    </nav>
  );
}