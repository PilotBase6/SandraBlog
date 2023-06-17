import ScrollEffect from "/src/components/ScrollEffects.jsx";


export default function Banner() {

  const v1="translateX(200px) translateZ(0px)",
  v2 = "translateX(-200px) translateZ(0px)",
  v3="translateX(-200px) translateZ(0px)",
  v4="translateX(200px) translateZ(0px)";
  
  return (
    <div className="mt-16 xs:mb-16 xl:mt-24 px-8 relative grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <ScrollEffect transformValor={v1} >
      <div className="z-10 absolute bg-[#B3C6C6]/20 w-[40vw] md:w-[40vw] lg:w-[30vw] h-[25rem] md:h-[30rem] lg:h-[35rem] top-[-6rem] right-0 rounded-l-full duration-700"></div>
      </ScrollEffect>
      <ScrollEffect transformValor={v2} >
      <div className="z-10 absolute bg-[#B3C6C6]/30 w-[40vw] md:w-[40vw] lg:w-[30vw] h-[25rem] md:h-[30rem] lg:h-[35rem] bottom-0 left-0 rounded-r-full duration-700"></div>
      </ScrollEffect>
      <ScrollEffect transformValor={v3} >
      <div className="relative text-black z-20 duration-700">
        <h1 className="font-poppins font-bold text-[2rem] md:text-[3.5rem] lg:text-[3.7rem] text-center">
          {" "}
          <span className="text-transparent text-gradient">
            Civil Engineer
          </span>{" "}
          service
        </h1>
        <p className=" font-poppins text-[.8rem] xl:text-[1.3rem]  text-justify mt-4">
        Ingeniera civil con formación técnica administrativa en el diseño, planificación e implementación de proyectos de obra civil e intervenciones de conservación ambiental. Cuento con experiencia en consultoría e interventoría de obras civiles, estimación de presupuestos, informes técnicos y planos.
        </p>
        <div className="flex flex-row justify-center my-12 gap-8">
          <a
            className="w-[8rem] xl:w-[10rem] xl:h-[3rem] xl:text-[1.2rem] min-w-[8rem] p-2 font-poppins font-semibold text-[.9rem] rounded-full cursor-pointer text-center bg-teal-700 text-white"
            href="#service"
          >
            Services
          </a>
          <a
            className="w-[8rem] xl:w-[10rem] xl:h-[3rem] xl:text-[1.2rem] min-w-[8rem] p-2 font-poppins font-semibold text-[.9rem] rounded-full cursor-pointer text-center bg-teal-700 text-white"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
      </ScrollEffect>
      <ScrollEffect transformValor={v4} >
      <figure className="relative z-20 p-8 duration-700 xs:max-w-[18rem] xl:max-w-[25rem] ">
        <img src="https://firebasestorage.googleapis.com/v0/b/sandra-s-blog.appspot.com/o/img20230415_04363926-PhotoRoom%20(1).png?alt=media&token=1d24dab5-9f64-4c9c-b0fe-b25e19b4423a" alt="Sandra Photo" />
      </figure>
      </ScrollEffect>
    </div>
  );
}
