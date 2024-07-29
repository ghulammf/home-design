import { categories, experience } from "../model/categoriesData";

function Categories() {
  return (
    <div
      id="services"
      className="my-10 mt-16 md:my-14 md:mt-20 lg:mt-32 md:my-18 lg:my-28"
    >
      <section className="flex flex-col items-center w-[90%] m-auto sm:flex-row justify-evenly ">
        <h1 className="sm:w-[50%]  font-medium content-center text-2xl md:text-4xl lg:text-6xl">
          Architecture Interior.
        </h1>
        <p className="sm:w-[50%] py-7 text-start md:text-lg lg:text-2xl">
          Designing an architectural involves integrating functionally,
          aesthetics, and user experience to create spaces that are both
          visually appealing and practical. Here&#39;s a step-by-step guide to
          designing an architectural interior
        </p>
      </section>
      <section className="grid min-[500px]:grid-cols-2 md:grid-cols-4 gap-4 max-w-[95%] m-auto my-7 md:my-10 lg:my-14">
        {categories.map((category, index) => {
          return (
            <div key={index} className="relative">
              <img
                src={category.img}
                alt={category.type.toLowerCase()}
                className="aspect-[3/4] object-cover"
              />
              <figcaption className="absolute bottom-1 mx-2 text-center bg-emerald-900 text-white p-1 px-2 rounded-md">
                {category.type}
              </figcaption>
            </div>
          );
        })}
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[95%] m-auto my-7 md:my-10 lg:my-14">
        {experience.map((exItem, index) => {
          return (
            <div key={index} className="px-3">
              <h1 className="text-emerald-900 font-semibold text-4xl md:text-5xl lg:text-7xl py-3 mb-2 md:mb-3 lg:mb-4">
                {exItem.heading}
              </h1>
              <h3 className="text-emerald-800 font-medium text-xl md:text-2xl lg:text-3xl">
                {exItem.title}
              </h3>
              <p className="md:text-lg lg:text-xl">{exItem.description}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Categories;
