export default function About() {
  return (
    <section
      id="about"
      className="
      px-6
      py-24
      "
    >
      <div
        className="
        mx-auto
        max-w-6xl
        "
      >
        {/* Title */}

        <h2
          className="
          text-center
          text-5xl
          font-bold
          text-green-400
          "
        >
          About EarthPulse
        </h2>

        {/* Description */}

        <p
          className="
          mx-auto
          mt-6
          max-w-3xl
          text-center
          text-lg
          leading-8
          text-gray-300
          sm:text-xl
          "
        >
          EarthPulse is a community-powered meme coin built on the Solana
          blockchain with a mission to unite people through blockchain,
          creativity, and environmental awareness.
        </p>

        <p
          className="
          mx-auto
          mt-6
          max-w-4xl
          text-center
          text-gray-400
          leading-8
          "
        >
          Rather than promising unrealistic returns, EarthPulse focuses on
          building a transparent, community-driven ecosystem where members can
          participate, create, educate, and inspire positive change. Together,
          we believe that one small pulse can create a global movement.
        </p>

        {/* Cards */}

        <div
          className="
          mt-16
          grid
          gap-8
          md:grid-cols-3
          "
        >
          {/* Vision */}

          <div
            className="
            rounded-2xl
            border
            border-green-800
            bg-black/40
            p-8
            "
          >
            <div className="text-5xl">🌎</div>

            <h3
              className="
              mt-4
              text-2xl
              font-bold
              text-green-400
              "
            >
              Vision
            </h3>

            <p
              className="
              mt-3
              text-gray-300
              "
            >
              To become the world's most recognized environmental-themed meme
              coin while inspiring positive global awareness.
            </p>
          </div>

          {/* Mission */}

          <div
            className="
            rounded-2xl
            border
            border-green-800
            bg-black/40
            p-8
            "
          >
            <div className="text-5xl">🌱</div>

            <h3
              className="
              mt-4
              text-2xl
              font-bold
              text-green-400
              "
            >
              Mission
            </h3>

            <p
              className="
              mt-3
              text-gray-300
              "
            >
              Build a transparent community that combines blockchain,
              sustainability, creativity, and education into one ecosystem.
            </p>
          </div>

          {/* Community */}

          <div
            className="
            rounded-2xl
            border
            border-green-800
            bg-black/40
            p-8
            "
          >
            <div className="text-5xl">💚</div>

            <h3
              className="
              mt-4
              text-2xl
              font-bold
              text-green-400
              "
            >
              Community
            </h3>

            <p
              className="
              mt-3
              text-gray-300
              "
            >
              Every member is a Pulse Keeper. Together we build a positive,
              transparent, and creative global community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}