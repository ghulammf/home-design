import { useState } from "react";
import faqs from "../model/faqsModel";

function Faq() {
  return (
    <div id="faq" className="w-[95%] m-auto grid sm:grid-cols-10">
      <section className="sm:col-span-4 my-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-3 md:mb-10">
          Still Have Any Questions?
        </h1>
        <button className="bg-emerald-900 p-2 px-5 rounded-full text-white my-2 hover:scale-105 transition-all hover:duration-200">
          Ask Any Question <span className="text-lg">&#8599;</span>
        </button>
      </section>
      <section className="sm:col-span-6">
        {faqs.map((item, index) => {
          return (
            <Accordion
              number={item.id}
              ques={item.question}
              ans={item.answer}
              key={index}
            />
          );
        })}
      </section>
    </div>
  );
}

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleAccord() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      onClick={handleAccord}
      className="flex p-7 border-black border-solid rounded-md cursor-pointer my-2"
      style={{ border: "1px solid black" }}
    >
      <div className="font-medium mx-2">{props.number}</div>
      <div className="mx-2">
        <h1 className="font-medium sm:text-lg">{props.ques}</h1>
        {isOpen ? <p className="font-light pt-3">{props.ans}</p> : ""}
      </div>
      <div className="ml-auto">
        {isOpen ? <span>&#128897;</span> : <span>&#128899;</span>}
      </div>
    </div>
  );
}

export default Faq;
