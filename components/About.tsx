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



        {/* TITLE */}


        <h2
          className="
          text-center
          text-5xl
          font-bold
          text-emerald-400
          "
        >
          About NovaGaia
        </h2>





        {/* INTRODUCTION */}


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

          NovaGaia is a community-driven ecosystem that combines
          Artificial Intelligence, Blockchain Technology, and Collective
          Intelligence to explore new ways of building a smarter,
          safer, and more sustainable future.

        </p>





        <p
          className="
          mx-auto
          mt-6
          max-w-4xl
          text-center
          leading-8
          text-gray-400
          "
        >

          NovaGaia is built around the belief that technology should
          empower people. Instead of focusing on unrealistic promises,
          NovaGaia focuses on education, innovation, transparency,
          and community participation through Web3 culture.

        </p>







        {/* CARDS */}


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
            border-emerald-800
            bg-black/40
            p-8
            "
          >

            <div className="text-5xl">
              🌍
            </div>


            <h3
              className="
              mt-4
              text-2xl
              font-bold
              text-emerald-400
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

              Build a global community where AI,
              blockchain, and human creativity work
              together to create positive innovation.

            </p>


          </div>









          {/* Mission */}


          <div
            className="
            rounded-2xl
            border
            border-emerald-800
            bg-black/40
            p-8
            "
          >

            <div className="text-5xl">
              🤖
            </div>


            <h3
              className="
              mt-4
              text-2xl
              font-bold
              text-emerald-400
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

              Educate, connect, and inspire people
              through responsible AI adoption,
              blockchain awareness, and decentralized
              community collaboration.

            </p>


          </div>









          {/* Community */}


          <div
            className="
            rounded-2xl
            border
            border-emerald-800
            bg-black/40
            p-8
            "
          >

            <div className="text-5xl">
              🧠
            </div>


            <h3
              className="
              mt-4
              text-2xl
              font-bold
              text-emerald-400
              "
            >
              Collective Intelligence
            </h3>


            <p
              className="
              mt-3
              text-gray-300
              "
            >

              Every member contributes ideas,
              creativity, and knowledge to help shape
              the future direction of NovaGaia.

            </p>


          </div>





        </div>





      </div>


    </section>

  );

}