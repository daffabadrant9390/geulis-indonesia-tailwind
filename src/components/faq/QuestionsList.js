import React, { useState } from "react";
import ArrowIcon from "../../assets/icons/arrow-icon.svg";

function QuestionsList() {
  const [questionOpen1, setQuestionOpen1] = useState(false);
  const [questionOpen2, setQuestionOpen2] = useState(false);
  const [questionOpen3, setQuestionOpen3] = useState(false);
  console.log(questionOpen1);

  const questionsData = [
    {
      id: 1,
      question: "How long does it takes to make a boat?",
      answer:
        "Lorem ipsum idk what kind of word is that pls this is not a medieval era and nobody even care for what have you done bruhhh go away and make a boat for Dream.",
    },
    {
      id: 2,
      question: "How to apply as mentee?",
      answer:
        "Lorem ipsum idk what kind of word is that pls this is not a medieval era and nobody even care for what have you done bruhhh go away and make a boat for Dream.",
    },
    {
      id: 3,
      question: "How long will this program takes?",
      answer:
        "Lorem ipsum idk what kind of word is that pls this is not a medieval era and nobody even care for what have you done bruhhh go away and make a boat for Dream.",
    },
  ];

  return (
    <section
      id="question-list"
      className="w-full h-full flex justify-center shadow-md"
    >
      <div className="max-w-screen-2xl w-full px-10 py-16">
        <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 xs:mb-5 md:mb-10 text-center">
          What are your curiousities?
        </h2>
        {/* START: QUESTIONS */}
        <div className="w-full h-full">
          <div className="bg-white custom-shadow rounded-lg xs:mb-4 md:mb-8">
            <div className="w-full h-full flex items-center gap-8 p-6">
              <div
                className="xs:w-4 md:w-6 lg:w-8 mt-2"
                onClick={() => setQuestionOpen2(!questionOpen2)}
              >
                <img
                  src={ArrowIcon}
                  className={[
                    "w-full h-full object-cover transition-all duration-500 cursor-pointer",
                    questionOpen2 ? "rotate-180" : "rotate-0",
                  ].join(" ")}
                  alt="Arrow Icon"
                />
              </div>
              <h3 className="xs:text-lg md:text-xl font-semibold text-gray-900">
                How to apply as mentee?
              </h3>
            </div>
            <p
              className={[
                "text-base text-gray-900 overflow-hidden transition-all duration-300 xs:pl-[68px] md:pl-22 pr-6 text-justify",
                questionOpen2 ? "opacity-100 pt-2 pb-6" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              Lorem ipsum idk what kind of word is that pls this is not a
              medieval era and nobody even care for what have you done bruhhh go
              away and make a boat for Dream.
            </p>
          </div>
        </div>
        {/* END: QUESTIONS */}
      </div>
    </section>
  );
}

export default QuestionsList;
