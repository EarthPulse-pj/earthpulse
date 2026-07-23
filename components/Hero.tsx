"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      px-6
      py-24
      "
    >

      <div
        className="
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-12
        md:grid-cols-2
        "
      >


        {/* LEFT CONTENT */}

        <motion.div

          initial={{
            opacity: 0,
            x: -50,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
          }}

        >


          {/* Launch Badge */}

          <p
            className="
            mb-5
            inline-block
            rounded-full
            border
            border-green-500
            bg-green-500/10
            px-5
            py-2
            text-sm
            text-green-300
            "
          >
            🌱 Launching Soon
          </p>





          {/* Main Title */}

          <h1
            className="
            text-5xl
            font-extrabold
            text-green-400
            sm:text-6xl
            md:text-7xl
            "
          >
            EarthPulse
          </h1>





          {/* Tagline */}

          <h2
            className="
            mt-4
            text-2xl
            font-semibold
            text-white
            sm:text-3xl
            "
          >
            One Planet. One Pulse. One Community.
          </h2>






          {/* Description */}

          <p
            className="
            mt-6
            max-w-xl
            text-lg
            leading-8
            text-gray-300
            sm:text-xl
            "
          >

            A community-powered meme coin created to inspire environmental
            awareness, sustainability, and positive global action.

            Together, we protect our planet and build a greener future.

          </p>







          {/* BUTTONS */}

          <div
            className="
            mt-10
            flex
            flex-col
            gap-4
            sm:flex-row
            "
          >


            {/* Whitepaper Button */}

            <a
              href="/EarthPulse-Whitepaper-v1.0.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
              rounded-xl
              bg-green-500
              px-8
              py-4
              text-center
              font-bold
              text-black
              transition
              hover:bg-green-400
              "
            >
              📄 View Whitepaper
            </a>






            {/* Community Button */}

            <a
              href="#community"
              className="
              rounded-xl
              border
              border-green-400
              px-8
              py-4
              text-center
              text-white
              transition
              hover:bg-green-900
              "
            >
              🌍 Join Community
            </a>


          </div>









          {/* Statistics */}

          <div
            className="
            mt-12
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-3
            "
          >

            <StatCard
              title="PULSE"
              text="Token"
            />


            <StatCard
              title="🌎"
              text="Global Mission"
            />


            <StatCard
              title="100%"
              text="Community Driven"
            />


          </div>



        </motion.div>









        {/* RIGHT SIDE MASCOT */}


        <motion.div

          initial={{
            opacity: 0,
            scale: 0.8,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 0.8,
          }}

          className="
          flex
          justify-center
          "

        >


          <Image

            src="/pulse-final.png"

            alt="EarthPulse Mascot"

            width={500}

            height={500}

            priority

            loading="eager"

            className="
            w-full
            max-w-sm
            drop-shadow-[0_0_50px_rgba(34,197,94,0.6)]
            sm:max-w-md
            "

          />


        </motion.div>



      </div>


    </section>
  );
}







function StatCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {


  return (

    <div
      className="
      rounded-xl
      border
      border-green-800
      bg-black/40
      p-5
      text-center
      "
    >

      <h3
        className="
        text-2xl
        font-bold
        text-green-400
        "
      >
        {title}
      </h3>


      <p
        className="
        text-sm
        text-gray-300
        "
      >
        {text}
      </p>


    </div>

  );
}