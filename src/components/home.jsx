function Home() {
  return (
    <div
      id="home"
      className="bg-[url('./assets/homepage.jpg')] bg-cover h-96 md:h-[500px] lg:h-[700px] text-white flex flex-col items-center justify-center gap-4"
      //   style={{ height: "600px" }}
    >
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-medium">
        Turning Houses into Homes, <br /> One Design at a Time
      </h1>
      <p className="max-w-[70%] md:text-2xl lg:text-3xl text-center">
        With every project we undertake, we are commited to turning houses into
        homes, one design at time.
      </p>
      <button className="bg-emerald-900 p-2 px-5 rounded-full text-white hover:scale-105 transition-all hover:duration-200">
        Explore Our Projects <span className="text-lg">&#8599;</span>
      </button>
    </div>
  );
}

export default Home;
