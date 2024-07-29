function Gallery() {
  return (
    <div
      id="gallery"
      className="my-10 mt-16 md:my-14 md:mt-20 lg:mt-32 md:my-18 lg:my-28 w-[95%] m-auto"
    >
      <section className="flex flex-col items-center sm:flex-row justify-evenly">
        <h1 className="sm:w-[50%] font-medium content-center text-2xl md:text-4xl lg:text-6xl">
          Interior Design Gallery
        </h1>
        <p className="sm:w-[50%] py-7 text-start md:text-lg lg:text-2xl">
          Develop a concept of theme that will guide the design process. This
          could be inspired by the clients by the client&#39;s preference, the
          building&#39;s architecture, or a specific design style.
        </p>
      </section>
      <section className="grid min-[550px]:grid-cols-3 grid-rows-1 my-4 sm:my-7 md:my-12 lg:my-16 gap-3">
        <div>
          <div>
            <img
              src="./assets/gallery_1.jpg"
              alt=""
              className="object-cover aspect-[3/4]"
            />
          </div>
        </div>

        <div>
          <div>
            <img
              src="src/assets/gallery_2.jpg"
              alt=""
              className="object-cover aspect-[3/2]"
              style={{}}
            />
          </div>
          <div>
            <img
              src="src/assets/gallery_3.jpg"
              alt=""
              className="object-cover aspect-[3/2]"
              style={{}}
            />
          </div>
        </div>

        <div>
          <div>
            <img
              src="src/assets/gallery_4.jpg"
              alt=""
              className="object-cover aspect-[3/4]"
              style={{}}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
