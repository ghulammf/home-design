import about from "../assets/about.jpg";

function About() {
  return (
    <div className="grid min-[550px]:grid-cols-2 w-[95%] m-auto gap-4 mt-20 my-10 md:my-24 md:mt-20 lg:my-28">
      <figure>
        <img src={about} alt="" className="aspect-square" />
      </figure>
      <section className=" content-center ps-7">
        <h1 className="text-2xl md:text-4xl lg:text-6xl my-2">
          Turning Houses into Homes, One Design at a Time
        </h1>
        <p className="my-2 md:text-lg lg:text-xl min-[550px]:my-6">
          With every project we undertake, we are committed to turning houses
          into homes, one design at a time.
        </p>
        <button className="bg-emerald-900 p-2 px-5 rounded-full text-white my-2 hover:scale-105 transition-all hover:duration-200">
          Explore Our Projects <span className="text-lg">&#8599;</span>
        </button>
      </section>
    </div>
  );
}

export default About;
