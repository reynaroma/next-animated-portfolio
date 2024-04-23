import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative">
        <Image
          src="/hero.png" alt="" fill
          className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2">
        {/* TITLE */}
        <h1>Crafting Digital Experiences, Designing Tomorrow</h1>
        {/* SUBTITLE */}
        <p>Welcome to my digital canvas, where innovation and creativity converge.
          With a keen aye for aeesthetics and a passion for technology and a mastery of code,
          my portfolio showcases a diverse collection of projects that reflect my commitment
          to excellence.
        </p>
        {/* BUTTONS */}
        <div>
          <button>View My Work</button>
          <button>Contact Me</button>
        </div>
      </div>

    </div>
  )
};

export default Homepage;
