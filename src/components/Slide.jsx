import { useState } from "react";
import ScrollEffect from "/src/components/ScrollEffects.jsx";

const showSlide = [
  {
    href: "/",
    img: "https://firebasestorage.googleapis.com/v0/b/sandra-s-blog.appspot.com/o/ProfundidadesT25_INFORME.png?alt=media&token=590be04e-a166-4b41-be36-66262f31bb85",
    title: "Tecnologia",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry1.",
  },
  {
    href: "/",
    img: "https://firebasestorage.googleapis.com/v0/b/sandra-s-blog.appspot.com/o/Modelo%20CG_HMS.png?alt=media&token=accec502-eb54-49ff-a63c-08858285287a",
    title: "Personas",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry2.",
  },
  {
    href: "/",
    img: "https://firebasestorage.googleapis.com/v0/b/sandra-s-blog.appspot.com/o/Modelo%20UN_HMS.png?alt=media&token=27e747b7-9b5f-47a5-9f56-4a726cbf8294",
    title: "Naturaleza",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry3.",
  },
];

export default function Slide() {
  const [bannerIndex, setBannerIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = bannerIndex === 0,
      prev = isFirstSlide ? showSlide.length - 1 : bannerIndex - 1;
    setBannerIndex(prev);
  };
  const nextSlide = () => {
    const isLastSlide = bannerIndex === showSlide.length - 1,
      next = isLastSlide ? 0 : bannerIndex + 1;
    setBannerIndex(next);
  };
  const goToSlide = (slideIndex) => {
    setBannerIndex(slideIndex);
  };
  const touchSlide = () => {
    const touch = document.querySelector(".touch-slider");
    const touchX = touch.getBoundingClientRect().x;
    setBannerIndex(touchX);
  };

  // const $fetch = "https://sandra-s-blog-default-rtdb.firebaseio.com/";
  // fetch($fetch)
  //   .then((res) => {
  //     console.log(res);
  //     return res.json();
  //   })
  //   .then((son) => {
  //     console.log(Slide(son));
  //     return Slide(son);
      
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });


  // console.log(ScrollEffect({ distanciaTopValor: 100, transformValor: 'translateX(100px) translateZ(0px)' }));
  
  // const v1 =  "translateY(-200px) translateZ(0px)",
    const v2 =  "translateX(200px) translateZ(0px)";
  

 
    return (

    <section
      id="slide"
      className="relative flex justify-center  items-center h-auto  max-w-[2000px] w-screen py-8 lg:py-0 xl:mt-28 text-black">
      <div
        onFocus={touchSlide}
        style={{backgroundImage: `url(${showSlide[bannerIndex].img})`}}
        className="z-20  w-full h-[70vh] lg:h-[100vh] xl:mt-0 bg-contain bg-center relative bg-no-repeat duration-[1000ms]"
      >
        <ScrollEffect transformValor={v2} >
        <div
          className="flex flex-col items-center justify-end text-center w-full h-full duration-500"
        >
          {/* <h1 className="text-white w-full">{showSlide[bannerIndex].title}</h1>
          <p className="text-white w-full pb-28">
            {showSlide[bannerIndex].content}
          </p> */}
        </div>
        </ScrollEffect>

        <svg
          onClick={prevSlide}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] rounded-full left-0 cursor-pointer"
          fill="gray"
          width="3rem"
          height="3rem"
          version="1.1"
          viewBox="0 0 700 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m176.4 280 123.2 212.8h224l-123.2-212.8 123.2-212.8h-224z" />
        </svg>
        <svg
          onClick={nextSlide}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] rotate-180 rounded-full right-4 cursor-pointer"
          fill="gray"
          width="3rem"
          height="3rem"
          version="1.1"
          viewBox="0 0 700 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m176.4 280 123.2 212.8h224l-123.2-212.8 123.2-212.8h-224z" />
        </svg>
        <div className="absolute bottom-20 lg:bottom-6 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {showSlide.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`cursor-pointer transition-all w-2 h-2 lg:w-2.5 lg:h-2.5 bg-slate-400 rounded-full ${
                  bannerIndex === slideIndex ? "p-1.5 lg:p-2" : "bg-opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      {/* <ScrollEffect transformValor={v3} >
      <div className="z-10 absolute bg-white/90 shadow-2xl w-[30vw] h-[15rem] top-[0rem] right-0 rounded-tl-full duration-1000"></div>
      </ScrollEffect>
      <ScrollEffect transformValor={v4} >
      <div className="z-10 absolute bg-white/70 shadow-2xl w-[30vw] h-[15rem] bottom-[0rem] left-0 rounded-br-full duration-1000"></div>
      </ScrollEffect> */}
    </section>
  );
}
