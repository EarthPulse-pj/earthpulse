"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function Mascot() {

  return (

    <ScrollReveal>

      <section
        className="
          px-6
          py-24
          bg-black/40
        "
      >

        <div className="
          mx-auto
          grid
          max-w-6xl
          items-center
          gap-12
          md:grid-cols-2
        ">


          {/* Mascot Image */}

          <motion.div

            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.8,
            }}

            className="
              flex
              justify-center
            "

          >

            <div
              className="
                rounded-full
                bg-green-500/20
                p-8
                shadow-[0_0_80px_rgba(34,197,94,0.5)]
              "
            >

              <Image
                src="/pulse.png"
                alt="EarthPulse Pulse Mascot"
                width={450}
                height={450}
                className="
                  drop-shadow-[0_0_40px_rgba(34,197,94,0.8)]
                "
              />

            </div>


          </motion.div>






          {/* Text Side */}

          <motion.div

            initial={{
              opacity:0,
              x:50,
            }}

            whileInView={{
              opacity:1,
              x:0,
            }}

            viewport={{
              once:true,
            }}

            transition={{
              duration:0.8,
            }}

          >


            <p className="
              text-green-300
              text-lg
            ">
              Meet Our Mascot
            </p>



            <h2 className="
              mt-3
              text-5xl
              font-extrabold
              text-green-400
            ">
              Pulse 🌎
            </h2>



            <p className="
              mt-6
              text-xl
              leading-8
              text-gray-300
            ">

              Pulse represents the heartbeat of our planet.
              A symbol of hope, unity, and positive action
              for a greener future.

            </p>




            <p className="
              mt-6
              text-gray-300
            ">

              Through EarthPulse, our mission is to bring
              people together using Web3 technology,
              creativity, and community power.

            </p>




            {/* Mission Cards */}

            <div className="
              mt-8
              grid
              gap-4
              sm:grid-cols-2
            ">


              <div className="
                rounded-xl
                border
                border-green-800
                bg-green-500/10
                p-5
              ">

                <h3 className="
                  text-xl
                  font-bold
                  text-green-400
                ">
                  🌱 Protect Earth
                </h3>


                <p className="
                  mt-2
                  text-gray-300
                ">
                  Inspire environmental awareness.
                </p>

              </div>




              <div className="
                rounded-xl
                border
                border-green-800
                bg-green-500/10
                p-5
              ">

                <h3 className="
                  text-xl
                  font-bold
                  text-green-400
                ">
                  🤝 Unite People
                </h3>


                <p className="
                  mt-2
                  text-gray-300
                ">
                  Build a global community.
                </p>


              </div>


            </div>



          </motion.div>



        </div>


      </section>


    </ScrollReveal>

  );
}