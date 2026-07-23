"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function Roadmap() {

  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation & Launch",
      icon: "🌱",
      items: [
        "EarthPulse website launch",
        "Build social media communities",
        "Release official whitepaper",
        "Grow early supporters",
      ],
    },

    {
      phase: "Phase 2",
      title: "Community Growth",
      icon: "🌍",
      items: [
        "Global community expansion",
        "Marketing campaigns",
        "Creator collaborations",
        "Community events and rewards",
      ],
    },

    {
      phase: "Phase 3",
      title: "Ecosystem Development",
      icon: "🚀",
      items: [
        "Token launch preparation",
        "Future Web3 utilities",
        "NFT collectible concepts",
        "Environmental initiatives",
      ],
    },

    {
      phase: "Phase 4",
      title: "Global EarthPulse Vision",
      icon: "🌎",
      items: [
        "Worldwide partnerships",
        "Sustainability programs",
        "Long-term ecosystem growth",
        "Building a greener future",
      ],
    },
  ];



  return (

    <ScrollReveal>

      <section
        id="roadmap"
        className="px-6 py-24 bg-black/40"
      >

        <div className="mx-auto max-w-6xl">


          {/* Header */}

          <h2 className="text-center text-5xl font-bold text-green-400">
            Roadmap
          </h2>


          <p className="
            mx-auto
            mt-6
            max-w-3xl
            text-center
            text-xl
            text-gray-300
          ">
            The journey of EarthPulse from a community idea
            into a global movement.
          </p>





          {/* Roadmap Cards */}

          <div className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
          ">


            {phases.map((phase, index) => (

              <motion.div

                key={index}

                whileHover={{
                  y: -10,
                }}

                transition={{
                  duration: 0.3,
                }}

                className="
                  rounded-2xl
                  border
                  border-green-800
                  bg-green-500/10
                  p-8
                "

              >


                <div className="
                  flex
                  items-center
                  gap-5
                ">


                  <div className="text-5xl">
                    {phase.icon}
                  </div>



                  <div>

                    <p className="text-green-300">
                      {phase.phase}
                    </p>


                    <h3 className="
                      text-2xl
                      font-bold
                      text-white
                    ">
                      {phase.title}
                    </h3>


                  </div>


                </div>





                <ul className="
                  mt-6
                  space-y-3
                  text-gray-300
                ">


                  {phase.items.map((item, i) => (

                    <li key={i}>
                      ✓ {item}
                    </li>

                  ))}


                </ul>



              </motion.div>


            ))}


          </div>


        </div>


      </section>


    </ScrollReveal>

  );
}