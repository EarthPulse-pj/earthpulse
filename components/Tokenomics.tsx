export default function Tokenomics() {
  const allocations = [
    {
      icon: "🌍",
      title: "Community Rewards",
      percentage: "45%",
      amount: "450,000,000 PULSE",
      description:
        "Dedicated to rewarding community participation, ecosystem growth, environmental campaigns, and future community-driven initiatives.",
    },
    {
      icon: "💧",
      title: "Liquidity",
      percentage: "25%",
      amount: "250,000,000 PULSE",
      description:
        "Reserved to provide healthy market liquidity, improve trading accessibility, and support a stable ecosystem.",
    },
    {
      icon: "🚀",
      title: "Marketing & Growth",
      percentage: "15%",
      amount: "150,000,000 PULSE",
      description:
        "Used for global awareness campaigns, partnerships, social media growth, influencer collaborations, and community expansion.",
    },
    {
      icon: "🌱",
      title: "Development",
      percentage: "10%",
      amount: "100,000,000 PULSE",
      description:
        "Supports website development, ecosystem improvements, technology upgrades, and future EarthPulse features.",
    },
    {
      icon: "🏦",
      title: "Treasury",
      percentage: "5%",
      amount: "50,000,000 PULSE",
      description:
        "Reserved for strategic opportunities, operational sustainability, and long-term ecosystem development.",
    },
  ];

  const utilities = [
    "🗳️ Community Governance & Voting",
    "🎨 NFT Collectibles",
    "👕 EarthPulse Merchandise",
    "🌎 Environmental Education Campaigns",
    "🔥 Climate & Sustainability Challenges",
    "🤝 Future Environmental Partnerships",
    "❤️ Donation Initiatives",
  ];

  return (
    <section
      id="tokenomics"
      className="bg-black/40 px-6 py-24"
    >

      <div className="mx-auto max-w-6xl">

        {/* TITLE */}

        <h2
          className="
          text-center
          text-5xl
          font-bold
          text-green-400
          "
        >
          Tokenomics
        </h2>


        <p
          className="
          mx-auto
          mt-6
          max-w-3xl
          text-center
          text-xl
          text-gray-300
          "
        >
          EarthPulse ($PULSE) is designed with a transparent,
          community-focused token structure built to support long-term
          ecosystem growth and environmental impact.
        </p>



        {/* SUPPLY CARD */}

        <div className="mt-12 flex justify-center">

          <div
            className="
            w-full
            max-w-xl
            rounded-3xl
            border
            border-green-700
            bg-green-500/10
            p-10
            text-center
            shadow-lg
            "
          >

            <h3 className="text-2xl font-bold text-green-400">
              Total Maximum Supply
            </h3>


            <p
              className="
              mt-4
              text-6xl
              font-black
              text-white
              "
            >
              1,000,000,000
            </p>


            <p
              className="
              mt-3
              text-xl
              text-green-300
              "
            >
              $PULSE Tokens
            </p>

          </div>

        </div>



        {/* ALLOCATION CARDS */}

        <div
          className="
          mt-16
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >

          {allocations.map((item) => (

            <TokenCard
              key={item.title}
              {...item}
            />

          ))}

        </div>



        {/* UTILITY SECTION */}

        <div className="mt-24">

          <h2
            className="
            text-center
            text-4xl
            font-bold
            text-green-400
            "
          >
            Future Ecosystem Utility
          </h2>


          <p
            className="
            mx-auto
            mt-5
            max-w-3xl
            text-center
            text-gray-300
            "
          >
            EarthPulse aims to expand beyond a meme token by building
            community-powered initiatives focused on environmental awareness
            and global participation.
          </p>



          <div
            className="
            mt-10
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            "
          >

            {utilities.map((utility)=>(

              <div
                key={utility}
                className="
                rounded-xl
                border
                border-green-900
                bg-black/50
                p-5
                text-center
                text-lg
                text-gray-200
                hover:border-green-400
                transition
                "
              >
                {utility}
              </div>

            ))}

          </div>


        </div>


      </div>

    </section>
  );
}





function TokenCard({
  icon,
  title,
  percentage,
  amount,
  description,
}: {
  icon:string;
  title:string;
  percentage:string;
  amount:string;
  description:string;
}) {


return (

<div
className="
rounded-2xl
border
border-green-800
bg-black/40
p-8
transition
hover:border-green-400
hover:-translate-y-1
"
>


<div className="text-5xl">
{icon}
</div>


<h3
className="
mt-5
text-2xl
font-bold
text-green-400
"
>
{title}
</h3>


<p
className="
mt-3
text-5xl
font-extrabold
text-white
"
>
{percentage}
</p>


<p
className="
mt-2
font-semibold
text-green-300
"
>
{amount}
</p>


<p
className="
mt-5
leading-7
text-gray-300
"
>
{description}
</p>


</div>

);

}