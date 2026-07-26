export default function Tokenomics() {

  const allocations = [

    {
      name: "Liquidity Pool",
      percentage: "25%",
      amount: "250,000,000 NVGAI",
      color: "bg-cyan-500",
      purpose:
        "Supports decentralized exchange liquidity, trading accessibility, and launch stability.",
    },


    {
      name: "Community Launch",
      percentage: "10%",
      amount: "100,000,000 NVGAI",
      color: "bg-emerald-500",
      purpose:
        "Reserved for early supporters, community participation, and public access.",
    },


    {
      name: "Ecosystem Rewards",
      percentage: "35%",
      amount: "350,000,000 NVGAI",
      color: "bg-green-500",
      purpose:
        "Supports community rewards, education programs, innovation initiatives, and ecosystem growth.",
    },


    {
      name: "Development",
      percentage: "10%",
      amount: "100,000,000 NVGAI",
      color: "bg-purple-500",
      purpose:
        "Used for technology development, security, maintenance, and future platform improvements.",
    },


    {
      name: "Marketing Growth",
      percentage: "10%",
      amount: "100,000,000 NVGAI",
      color: "bg-pink-500",
      purpose:
        "Supports content creation, partnerships, awareness campaigns, and community expansion.",
    },


    {
      name: "Treasury Reserve",
      percentage: "10%",
      amount: "100,000,000 NVGAI",
      color: "bg-yellow-500",
      purpose:
        "Reserved for strategic opportunities, partnerships, and ecosystem development.",
    },

  ];



  const vesting = [

    {
      title: "Development",
      lock:
        "10% unlocked at launch",
      release:
        "Remaining 90% vested linearly over 24 months",
    },


    {
      title: "Marketing Growth",
      lock:
        "20% unlocked at launch",
      release:
        "Remaining 80% vested linearly over 12 months",
    },


    {
      title: "Ecosystem Rewards",
      lock:
        "Initial community distribution available",
      release:
        "Remaining allocation released gradually through ecosystem programs",
    },


    {
      title: "Treasury Reserve",
      lock:
        "Locked at launch",
      release:
        "Used only for strategic ecosystem development",
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


        <h2
          className="
          text-center
          text-5xl
          font-bold
          text-emerald-400
          "
        >
          NovaGaia Tokenomics
        </h2>



        <p
          className="
          mx-auto
          mt-6
          max-w-3xl
          text-center
          text-gray-300
          "
        >
          NVGAI is designed to support long-term ecosystem growth,
          transparency, community participation, and sustainable development.
        </p>



        {/* Token Information */}

        <div
          className="
          mt-12
          grid
          gap-6
          md:grid-cols-3
          "
        >

          <InfoCard
            title="Blockchain"
            value="Solana"
          />

          <InfoCard
            title="Decimals"
            value="9"
          />

          <InfoCard
            title="Maximum Supply"
            value="1B NVGAI"
          />


        </div>





        <h3
          className="
          mt-16
          text-3xl
          font-bold
          "
        >
          Token Allocation
        </h3>



        <div className="mt-8 space-y-6">


          {allocations.map((item)=>(

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
              "
              >

                <h4 className="font-bold">
                  {item.name}
                </h4>


                <span
                  className="
                  font-bold
                  text-emerald-400
                  "
                >
                  {item.percentage}
                </span>


              </div>



              <div
                className="
                mt-3
                h-3
                rounded-full
                bg-gray-800
                "
              >

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

        <h3
          className="
          mt-20
          text-3xl
          font-bold
          "
        >
          Vesting & Transparency
        </h3>



        <div
          className="
          mt-8
          grid
          gap-6
          md:grid-cols-2
          "
        >

          {vesting.map((item)=>(

            <div
              key={item.title}
              className="
              rounded-xl
              border
              border-emerald-500/20
              bg-black/40
              p-6
              "
            >

              <h4
                className="
                text-xl
                font-bold
                text-emerald-400
                "
              >
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





        {/* Philosophy */}

        <div
          className="
          mt-20
          rounded-2xl
          border
          border-cyan-500/30
          bg-black/60
          p-8
          "
        >

          <h3
            className="
            text-3xl
            font-bold
            text-cyan-400
            "
          >
            Tokenomics Philosophy
          </h3>


          <p className="mt-4 text-gray-300">
            NovaGaia focuses on transparency, community participation,
            and long-term ecosystem growth through responsible token
            management.
          </p>


        </div>



      </div>


    </section>

  );

}





function InfoCard({
  title,
  value,
}:{
  title:string;
  value:string;
}){

  return(

    <div
      className="
      rounded-xl
      border
      border-emerald-800
      bg-black/40
      p-6
      text-center
      "
    >

      <h4 className="text-gray-400">
        {title}
      </h4>


      <p
        className="
        mt-2
        text-2xl
        font-bold
        text-emerald-400
        "
      >
        {value}
      </p>


    </div>

  );

}