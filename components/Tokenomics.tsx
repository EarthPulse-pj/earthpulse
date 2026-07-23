export default function Tokenomics() {
  const allocations = [
    {
      name: "Liquidity Pool",
      percentage: "25%",
      amount: "250,000,000 PULSE",
      color: "bg-blue-500",
      purpose: "Trading liquidity and market stability at launch",
    },
    {
      name: "Community Launch",
      percentage: "10%",
      amount: "100,000,000 PULSE",
      color: "bg-green-500",
      purpose: "Public community participation and early supporters",
    },
    {
      name: "Ecosystem Rewards",
      percentage: "35%",
      amount: "350,000,000 PULSE",
      color: "bg-emerald-500",
      purpose:
        "Community rewards, campaigns, environmental programs, and future ecosystem growth",
    },
    {
      name: "Team Development",
      percentage: "10%",
      amount: "100,000,000 PULSE",
      color: "bg-purple-500",
      purpose:
        "Core development, technology, security, and long-term project building",
    },
    {
      name: "Marketing Growth",
      percentage: "10%",
      amount: "100,000,000 PULSE",
      color: "bg-pink-500",
      purpose:
        "Marketing campaigns, partnerships, and community expansion",
    },
    {
      name: "Treasury Reserve",
      percentage: "10%",
      amount: "100,000,000 PULSE",
      color: "bg-yellow-500",
      purpose:
        "Strategic reserve, partnerships, and future ecosystem needs",
    },
  ];


  const vesting = [
    {
      title: "Team Development",
      lock: "10% available at launch (10,000,000 PULSE)",
      release: "Remaining 90% vested linearly over 24 months",
    },
    {
      title: "Marketing Growth",
      lock: "20% available at launch (20,000,000 PULSE)",
      release: "Remaining 80% vested linearly over 12 months",
    },
    {
      title: "Ecosystem Rewards",
      lock: "10% initial distribution available (35,000,000 PULSE)",
      release:
        "Remaining rewards released gradually through community programs and environmental initiatives",
    },
    {
      title: "Treasury Reserve",
      lock: "Locked at launch (0% circulating)",
      release:
        "Released only for strategic partnerships, ecosystem expansion, and approved development needs",
    },
  ];


  return (
    <section
      id="tokenomics"
      className="
      bg-black/40
      px-6
      py-24
      text-white
      "
    >

      <div className="mx-auto max-w-6xl">


        <h2 className="
        text-center
        text-5xl
        font-bold
        text-green-400
        ">
          EarthPulse Tokenomics
        </h2>


        <p className="
        mx-auto
        mt-6
        max-w-3xl
        text-center
        text-gray-300
        ">
          EarthPulse is designed with long-term sustainability,
          transparency, and community growth at its foundation.
        </p>


        {/* Supply */}

        <div className="
        mt-12
        rounded-2xl
        border
        border-green-500/30
        bg-black/50
        p-8
        text-center
        ">

          <h3 className="text-2xl font-bold">
            Total Supply
          </h3>

          <p className="
          mt-3
          text-4xl
          font-bold
          text-green-400
          ">
            1,000,000,000 PULSE
          </p>

        </div>



        {/* Allocation */}

        <h3 className="
        mt-16
        text-3xl
        font-bold
        ">
          Token Allocation
        </h3>


        <div className="mt-8 space-y-6">

          {allocations.map((item) => (

            <div
            key={item.name}
            className="
            rounded-xl
            bg-white/5
            p-5
            "
            >

              <div className="
              flex
              justify-between
              ">

                <h4 className="font-bold">
                  {item.name}
                </h4>

                <span className="
                text-green-400
                font-bold
                ">
                  {item.percentage}
                </span>

              </div>


              <div className="
              mt-3
              h-3
              rounded-full
              bg-gray-800
              ">

                <div
                className={`
                h-3
                rounded-full
                ${item.color}
                `}
                style={{
                  width:item.percentage
                }}
                />

              </div>


              <p className="mt-3 text-gray-300">
                {item.amount}
              </p>


              <p className="text-sm text-gray-400">
                {item.purpose}
              </p>


            </div>

          ))}

        </div>

                {/* Vesting */}

        <h3 className="
        mt-20
        text-3xl
        font-bold
        ">
          Vesting Timeline
        </h3>


        <div className="
        mt-8
        grid
        gap-6
        md:grid-cols-2
        ">

        {vesting.map((item)=>(

          <div
          key={item.title}
          className="
          rounded-xl
          border
          border-green-500/20
          bg-black/40
          p-6
          "
          >

            <h4 className="
            text-xl
            font-bold
            text-green-400
            ">
              {item.title}
            </h4>

            <p className="mt-3 text-gray-300">
              🔒 {item.lock}
            </p>

            <p className="text-gray-300">
              📅 {item.release}
            </p>


          </div>

        ))}

        </div>



        {/* Wallet Transparency */}

        <div className="
        mt-20
        rounded-2xl
        border
        border-green-500/30
        bg-black/60
        p-8
        ">


        <h3 className="
        text-3xl
        font-bold
        text-green-400
        ">
          Wallet Transparency
        </h3>


        <p className="
        mt-4
        text-gray-300
        ">
        EarthPulse maintains publicly visible wallets
        to ensure accountability and community trust.
        </p>


        <div className="mt-6 space-y-4">


          <div>
            💧 Liquidity Wallet
            <p className="text-gray-500">
            Public address revealed after launch
            </p>
          </div>


          <div>
            🌍 Community Launch Wallet
            <p className="text-gray-500">
            Supports fair community participation and early supporters
            </p>
          </div>


          <div>
            🛠 Development Wallet
            <p className="text-gray-500">
            10% available at launch, remaining tokens vested over 24 months
            </p>
          </div>


          <div>
            📢 Marketing Wallet
            <p className="text-gray-500">
            20% available at launch, remaining tokens vested over 12 months
            </p>
          </div>


          <div>
            🎁 Ecosystem Rewards Wallet
            <p className="text-gray-500">
            Supports community rewards, campaigns, and environmental programs
            </p>
          </div>


          <div>
            🏦 Treasury Wallet
            <p className="text-gray-500">
            Reserved for partnerships and future ecosystem expansion
            </p>
          </div>


        </div>


        </div>



      </div>

    </section>
  );
}