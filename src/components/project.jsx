import feedback from "../model/feedbackData";

function Project() {
  return (
    <div
      id="project"
      className="my-10 mt-16 md:my-14 md:mt-20 lg:mt-32 md:my-18 lg:my-28 w-[95%] m-auto"
    >
      <section className="">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-medium">
          Explore client feedback on our latest project
        </h1>
      </section>
      <section className="flex flex-nowrap gap-4 w-full overflow-auto my-7 sm:my-9 md:my-12 lg:my-14">
        {feedback.map((item, index) => {
          return (
            <div
              key={index}
              className="min-w-[280px] min-[400px]:min-w-[350px] md:min-w-[500px]"
            >
              <div>
                <img
                  src={item.img}
                  alt=""
                  className="aspect-[4/2] object-cover"
                />
              </div>
              <hr className="my-2" />
              <p className="md:text-lg">{item.description}</p>
              <hr className="my-2" />
              <div className="flex gap-x-2 sm:gap-x-4 lg:gap-x-6 mb-8">
                <span className="text-xl sm:text-2xl lg:text-3xl">
                  {item.profil}
                </span>
                <p className="font-medium content-center">{item.name}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Project;
