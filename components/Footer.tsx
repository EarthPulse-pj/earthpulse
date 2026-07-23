"use client";

import {
  FaXTwitter,
  FaDiscord,
  FaTelegram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="border-t border-green-900 bg-black px-8 py-16">

      <div className="mx-auto max-w-7xl">


        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-3">


          {/* Brand */}
          <div>

            <h2 className="text-4xl font-extrabold text-green-400">
              EarthPulse 🌎
            </h2>


            <p className="mt-5 max-w-sm text-gray-400">
              A community-powered meme coin created to inspire
              environmental awareness, sustainability, and a greener
              future through Web3 innovation.
            </p>


          </div>





          {/* Navigation */}
          <div>

            <h3 className="text-xl font-bold text-green-400">
              Explore
            </h3>


            <ul className="mt-5 space-y-3 text-gray-300">


              <li>
                <a
                  href="#about"
                  className="transition hover:text-green-400"
                >
                  About
                </a>
              </li>


              <li>
                <a
                  href="#tokenomics"
                  className="transition hover:text-green-400"
                >
                  Tokenomics
                </a>
              </li>


              <li>
                <a
                  href="#roadmap"
                  className="transition hover:text-green-400"
                >
                  Roadmap
                </a>
              </li>


              <li>
                <a
                  href="#community"
                  className="transition hover:text-green-400"
                >
                  Community
                </a>
              </li>


            </ul>


          </div>






          {/* Social */}
          <div>

            <h3 className="text-xl font-bold text-green-400">
              Join EarthPulse
            </h3>


            <p className="mt-5 text-gray-400">
              Follow our journey and become part of the movement.
            </p>



            <div className="mt-6 flex flex-wrap gap-4">


              <a
                href="https://x.com/YOUR_X_ACCOUNT"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-green-700
                text-xl
                text-green-400
                transition
                hover:bg-green-900
                "
              >
                <FaXTwitter />
              </a>





              <a
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-green-700
                text-xl
                text-green-400
                transition
                hover:bg-green-900
                "
              >
                <FaDiscord />
              </a>





              <a
                href="https://telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-green-700
                text-xl
                text-green-400
                transition
                hover:bg-green-900
                "
              >
                <FaTelegram />
              </a>





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
                rounded-xl
                border
                border-green-700
                text-xl
                text-green-400
                transition
                hover:bg-green-900
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
                rounded-xl
                border
                border-green-700
                text-xl
                text-green-400
                transition
                hover:bg-green-900
                "
              >
                <FaTiktok />
              </a>



            </div>


          </div>



        </div>





        {/* Bottom */}
        <div className="mt-14 border-t border-green-900 pt-8 text-center">


          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} EarthPulse. All rights reserved.
          </p>


          <p className="mt-2 text-xs text-gray-600">
            EarthPulse is a community project. Cryptocurrency involves
            risks. Always do your own research.
          </p>


        </div>


      </div>


    </footer>
  );
}