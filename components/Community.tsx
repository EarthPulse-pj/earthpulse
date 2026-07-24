"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

import {
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";


export default function Community() {

  const communities = [
  {
    icon: "𝕏",
    title: "X (Twitter)",
    description:
      "Follow EarthPulse updates, announcements, memes, and community discussions.",
    button: "Follow X",
    link: "https://x.com/Earthpulsemain",
  },

  {
    icon: "💬",
    title: "Discord",
    description:
      "Join our community hub, connect with supporters, and share ideas.",
    button: "Join Discord",
    link: "#",
  },

  {
    icon: "📱",
    title: "Telegram",
    description:
      "Stay connected with the EarthPulse community through real-time updates.",
    button: "Join Telegram",
    link: "#",
  },
];



  return (

    <ScrollReveal>

      <section
        id="community"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-6xl">


          {/* Title */}

          <h2 className="
            text-center
            text-5xl
            font-bold
            text-green-400
          ">
            Join The EarthPulse Community
          </h2>



          <p className="
            mx-auto
            mt-6
            max-w-3xl
            text-center
            text-xl
            text-gray-300
          ">
            Be part of a global movement where crypto,
            creativity, and environmental awareness come together.
          </p>





          {/* Community Cards */}

          <div className="
            mt-16
            grid
            gap-8
            md:grid-cols-3
          ">


            {communities.map((community, index) => (

              <motion.div

                key={index}

                whileHover={{
                  y: -10,
                }}

                className="
                  rounded-2xl
                  border
                  border-green-800
                  bg-green-500/10
                  p-8
                  text-center
                "

              >


                <div className="
                  text-6xl
                ">
                  {community.icon}
                </div>



                <h3 className="
                  mt-5
                  text-2xl
                  font-bold
                  text-green-400
                ">
                  {community.title}
                </h3>




                <p className="
                  mt-4
                  text-gray-300
                ">
                  {community.description}
                </p>





              <a
  href={community.link}
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-6
    inline-block
    rounded-xl
    bg-green-500
    px-6
    py-3
    font-bold
    text-black
    transition
    hover:bg-green-400
  "
>
  {community.button}
</a>



              </motion.div>


            ))}


          </div>





          {/* Added Facebook + TikTok Icons */}

          <div
            className="
            mt-12
            flex
            justify-center
            gap-6
            "
          >


            <a
              href="https://facebook.com/YOUR_FACEBOOK"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-green-800
              bg-green-500/10
              text-2xl
              text-green-400
              transition
              hover:-translate-y-2
              hover:bg-green-500
              hover:text-black
              "
            >
              <FaFacebook />
            </a>




            <a
              href="https://tiktok.com/@YOUR_TIKTOK"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-green-800
              bg-green-500/10
              text-2xl
              text-green-400
              transition
              hover:-translate-y-2
              hover:bg-green-500
              hover:text-black
              "
            >
              <FaTiktok />
            </a>


          </div>







          {/* Final Message */}

          <div className="
            mt-16
            rounded-2xl
            border
            border-green-800
            bg-black/40
            p-8
            text-center
          ">


            <h3 className="
              text-3xl
              font-bold
              text-white
            ">
              Together We Create The Pulse Of Earth 🌎
            </h3>


            <p className="
              mt-4
              text-gray-300
            ">
              Every supporter helps grow the vision of
              a cleaner, greener, and more connected future.
            </p>


          </div>



        </div>


      </section>


    </ScrollReveal>

  );
}