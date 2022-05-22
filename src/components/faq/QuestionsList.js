import React, { useState } from "react";
import ArrowIcon from "../../assets/icons/arrow-icon.svg";
// import IndonesiaFlag from "../../assets/indonesia-flag.png";
// import USAFlag from "../../assets/usa-flag.png";

function QuestionsList() {
  const [language, setLanguage] = useState("ENG");

  const [questionOpen1, setQuestionOpen1] = useState(false);
  const [questionOpen2, setQuestionOpen2] = useState(false);
  const [questionOpen3, setQuestionOpen3] = useState(false);
  const [questionOpen4, setQuestionOpen4] = useState(false);
  const [questionOpen5, setQuestionOpen5] = useState(false);
  const [questionOpen6, setQuestionOpen6] = useState(false);
  // const [questionOpen7, setQuestionOpen7] = useState(false);

  const handleLanguageSelect = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <section
      id="question-list"
      className="w-full h-full flex justify-center shadow-md"
    >
      <div className="max-w-screen-2xl w-full xs:px-4 md:px-10 xs:py-16 md:py-24">
        <div className="flex items-center justify-between xs:mb-10 md:mb-14 gap-6">
          <h2 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
            {language === "ENG"
              ? "What are your curiousities?"
              : "Apa yang ingin kamu ketahui?"}
          </h2>
          <select
            className="xs:px-3 md:px-5 lg:px-6 xs:py-2 md:py-3 border border-gray-300 rounded-md outline-none xs:text-base md:text-lg"
            value={language}
            onChange={(e) => handleLanguageSelect(e)}
          >
            <option value="ENG">ENG</option>
            <option value="ID">ID</option>
          </select>
        </div>
        {/* START: QUESTIONS */}
        <div className="w-full h-full">
          {/* START: QUESTION - 1 */}
          <div
            className={[
              "custom-shadow rounded-lg xs:mb-4 md:mb-8 transition-all duration-500",
              questionOpen1 ? "bg-gray-100" : "bg-white",
            ].join(" ")}
          >
            <div className="w-full h-full flex items-center gap-8 p-6">
              <div className="w-1/12 flex justify-center items-center">
                <div
                  className="xs:w-4 md:w-6"
                  onClick={() => {
                    setQuestionOpen1(!questionOpen1);
                    setQuestionOpen2(false);
                    setQuestionOpen3(false);
                    setQuestionOpen4(false);
                    setQuestionOpen5(false);
                    setQuestionOpen6(false);
                  }}
                >
                  <img
                    src={ArrowIcon}
                    className={[
                      "w-full h-full object-cover transition-all duration-500 cursor-pointer",
                      questionOpen1 ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
              <div className="w-11/12">
                <h3 className="xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                  {language === "ENG"
                    ? "Who is eligible to apply for the program?"
                    : "Siapa saja yang dapat mendaftar pada program ini?"}
                </h3>
              </div>
            </div>
            <p
              className={[
                "text-base text-gray-900 overflow-hidden transition-all duration-300 pl-6 pr-6 text-justify",
                questionOpen1 ? "opacity-100 pt-2 pb-6" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              {language === "ENG"
                ? "All students across universities in South Sumatra from batch 2019-2021 are eligible to apply to this program!"
                : "Semua mahasiswa aktif angkatan 2019-2021 yang berkuliah di universitas Provinsi Sumatera Selatan dapat mendaftar pada program in."}
            </p>
          </div>
          {/* END: QUESTION - 1 */}

          {/* START: QUESTION - 2 */}
          <div
            className={[
              "custom-shadow rounded-lg xs:mb-4 md:mb-8 transition-all duration-500",
              questionOpen2 ? "bg-gray-100" : "bg-white",
            ].join(" ")}
          >
            <div className="w-full h-full flex items-center gap-8 p-6">
              <div className="w-1/12 flex justify-center items-center">
                <div
                  className="xs:w-4 md:w-6"
                  onClick={() => {
                    setQuestionOpen2(!questionOpen2);
                    setQuestionOpen1(false);
                    setQuestionOpen3(false);
                    setQuestionOpen4(false);
                    setQuestionOpen5(false);
                    setQuestionOpen6(false);
                  }}
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
              </div>
              <div className="w-11/12">
                <h3 className="xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                  {language === "ENG"
                    ? "How long will the program be running?"
                    : "Berapa lama waktu program ini berjalan?"}
                </h3>
              </div>
            </div>
            <p
              className={[
                "text-base text-gray-900 overflow-hidden transition-all duration-300 pl-6 pr-6 text-justify",
                questionOpen2 ? "opacity-100 pt-2 pb-6" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              {language === "ENG"
                ? "The program will be running within 3 months (April to June 2022) and all the activities will be conducted virtually."
                : "Program ini akan berjalan selama 3 bulan (April - Juni 2022) dan semua aktivitasnya akan diadakan secara daring/online."}
            </p>
          </div>
          {/* END: QUESTION - 2 */}

          {/* START: QUESTION - 3 */}
          <div
            className={[
              "custom-shadow rounded-lg xs:mb-4 md:mb-8 transition-all duration-500",
              questionOpen3 ? "bg-gray-100" : "bg-white",
            ].join(" ")}
          >
            <div className="w-full h-full flex items-center gap-8 p-6">
              <div className="w-1/12 flex justify-center items-center">
                <div
                  className="xs:w-4 md:w-6"
                  onClick={() => {
                    setQuestionOpen3(!questionOpen3);
                    setQuestionOpen1(false);
                    setQuestionOpen2(false);
                    setQuestionOpen4(false);
                    setQuestionOpen5(false);
                    setQuestionOpen6(false);
                  }}
                >
                  <img
                    src={ArrowIcon}
                    className={[
                      "w-full h-full object-cover transition-all duration-500 cursor-pointer",
                      questionOpen3 ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
              <div className="w-11/12">
                <h3 className="xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                  {language === "ENG"
                    ? "Can I join more than one class?"
                    : "Apakah saya bisa bergabung lebih dari satu kelas?"}
                </h3>
              </div>
            </div>
            <p
              className={[
                "text-base text-gray-900 overflow-hidden transition-all duration-300 pl-6 pr-6 text-justify",
                questionOpen3 ? "opacity-100 pt-2 pb-6" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              {language === "ENG"
                ? "You can register for more than one class, but you will only be selected for one class."
                : "Kamu bisa mendaftar untuk dua kelas, tapi kamu hanya akan terpilih untuk satu kelas."}
            </p>
          </div>
          {/* END: QUESTION - 3 */}

          {/* START: QUESTION - 4 */}
          <div
            className={[
              "custom-shadow rounded-lg xs:mb-4 md:mb-8 transition-all duration-500",
              questionOpen4 ? "bg-gray-100" : "bg-white",
            ].join(" ")}
          >
            <div className="w-full h-full flex items-center gap-8 p-6">
              <div className="w-1/12 flex justify-center items-center">
                <div
                  className="xs:w-4 md:w-6"
                  onClick={() => {
                    setQuestionOpen4(!questionOpen4);
                    setQuestionOpen1(false);
                    setQuestionOpen2(false);
                    setQuestionOpen3(false);
                    setQuestionOpen5(false);
                    setQuestionOpen6(false);
                  }}
                >
                  <img
                    src={ArrowIcon}
                    className={[
                      "w-full h-full object-cover transition-all duration-500 cursor-pointer",
                      questionOpen4 ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
              <div className="w-11/12">
                <h3 className="xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                  {language === "ENG"
                    ? "What kind of the candidates that Geulis Indonesia is looking for?"
                    : "Kandidat seperti apa yang dicari oleh Geulis Indonesia?"}
                </h3>
              </div>
            </div>
            <p
              className={[
                "text-base text-gray-900 overflow-hidden transition-all duration-300 pl-6 pr-6 text-justify",
                questionOpen4 ? "opacity-100 pt-2 pb-6" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              {language === "ENG"
                ? "We are looking for candidates that are keen to learn and develop themselves and are ready to give back to their surroundings."
                : "Kami mencari kandidat yang memiliki semangat untuk belajar dan mengembangkan diri mereka, serta siap untuk memberikan dampak bagi orang-orang di sekitar mereka."}
            </p>
          </div>
          {/* END: QUESTION - 4 */}

          {/* START: QUESTION - 5 */}
          <div
            className={[
              "custom-shadow rounded-lg xs:mb-4 md:mb-8 transition-all duration-500",
              questionOpen5 ? "bg-gray-100" : "bg-white",
            ].join(" ")}
          >
            <div className="w-full h-full flex items-center gap-8 p-6">
              <div className="w-1/12 flex justify-center items-center">
                <div
                  className="xs:w-4 md:w-6"
                  onClick={() => {
                    setQuestionOpen5(!questionOpen5);
                    setQuestionOpen1(false);
                    setQuestionOpen2(false);
                    setQuestionOpen3(false);
                    setQuestionOpen4(false);
                    setQuestionOpen6(false);
                  }}
                >
                  <img
                    src={ArrowIcon}
                    className={[
                      "w-full h-full object-cover transition-all duration-500 cursor-pointer",
                      questionOpen5 ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
              <div className="w-11/12">
                <h3 className="xs:text-base sm:text-lg md:text-xl font-semibold">
                  {language === "ENG"
                    ? "I’m not confident with my English skill. Can I still apply for the program?"
                    : "Saya tidak percaya diri dengan kemampuan Bahasa Inggris saya. Apakah saya tetap bisa mendaftar pada program ini?"}
                </h3>
              </div>
            </div>
            <p
              className={[
                "text-base text-gray-900 overflow-hidden transition-all duration-300 pl-6 pr-6 text-justify",
                questionOpen5 ? "opacity-100 pt-2 pb-6" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              {language === "ENG"
                ? "Sure, you can! We believe that the language barriers shouldn't be what's stopping you to register, so don’t mind about it!"
                : "Tentu sangat bisa! Kami percaya bahwa bahasa bukanlah batasan dan menghentikan kamu untuk mendaftar, jadi jangan ragu ya! "}
            </p>
          </div>
          {/* END: QUESTION - 5 */}

          {/* START: QUESTION - 6 */}
          <div
            className={[
              "custom-shadow rounded-lg xs:mb-4 md:mb-8 transition-all duration-500",
              questionOpen6 ? "bg-gray-100" : "bg-white",
            ].join(" ")}
          >
            <div className="w-full h-full flex items-center gap-8 p-6">
              <div className="w-1/12 flex justify-center items-center">
                <div
                  className="xs:w-4 md:w-6"
                  onClick={() => {
                    setQuestionOpen6(!questionOpen6);
                    setQuestionOpen1(false);
                    setQuestionOpen2(false);
                    setQuestionOpen3(false);
                    setQuestionOpen4(false);
                    setQuestionOpen5(false);
                  }}
                >
                  <img
                    src={ArrowIcon}
                    className={[
                      "w-full h-full object-cover transition-all duration-500 cursor-pointer",
                      questionOpen6 ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
              <div className="w-11/12">
                <h3 className="xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                  {language === "ENG"
                    ? "I don’t have any awards and achievements, can I still join your teams?"
                    : "Saya tidak punya prestasi dan penghargaan, apakah saya tetap bisa bergabung?"}
                </h3>
              </div>
            </div>
            <p
              className={[
                "text-base text-gray-900 overflow-hidden transition-all duration-300 pl-6 pr-6 text-justify",
                questionOpen6 ? "opacity-100 pt-2 pb-6" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              {language === "ENG"
                ? "Worry not, you are very welcome to join us! We are here to support and equip you with many development insights and instruments for you to go beyond and multiply the impacts."
                : "Jangan khawatir, kamu sangat bisa bergabung bersama kami! Kami hadir untuk mendukung dan membantu kamu dengan berbagai wawasan dan instrumen pengembangan diri untuk mendukung aspirasi kamu."}
            </p>
          </div>
          {/* END: QUESTION - 6 */}
        </div>
        {/* END: QUESTIONS */}
      </div>
    </section>
  );
}

export default QuestionsList;
