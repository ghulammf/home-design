function Contact() {
  return (
    <div className="grid sm:grid-cols-2 bg-[url('src/assets/contact.jpg')] bg-cover h-96 md:h-[500px] lg:h-[700px] w-full m-auto md:py-14 text-white my-10 mt-16 md:my-14 md:mt-20 lg:mt-32 md:my-18 lg:my-28">
      <section className=" p-5">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-medium">
          Turning Houses into Homes, One Design at a Time
        </h1>
      </section>
      <section className=" p-5  md:py-10">
        <p className="md:text-lg lg:text-xl">
          With every project we undertake, we are commited to turning houses
          into homes, one design at a time.
        </p>
        <div className="flex flex-wrap gap-3 my-4 md:my-8">
          <button className="bg-emerald-900 p-2 px-5 rounded-full text-white hover:scale-105 transition-all hover:duration-200">
            Get in touch <span className="text-lg">&#8599;</span>
          </button>
          <button className="border-2 border-white p-2 px-5 rounded-full text-white hover:scale-105 transition-all hover:duration-200">
            Call us: +88 0273 83928n <span className="text-lg">&#8599;</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Contact;
