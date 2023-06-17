import ScrollEffect from "/src/components/ScrollEffects.jsx";
import { saveAs } from "file-saver";

export default function AboutMe() {

  function handleDownload() {
    // Obtén el archivo que deseas descargar (puede ser un archivo local o una URL)
    const fileUrl = "https://firebasestorage.googleapis.com/v0/b/sandra-s-blog.appspot.com/o/CV_EN_Sandra%20Maldonado%20GIS.pdf?alt=media&token=baa53e78-6cd6-4a45-9a0c-3ef682d33780";

    // Descarga el archivo utilizando la función saveAs
    saveAs(fileUrl, "CV_SANDRAMALDONADO.pdf");
  }




  const v1 = "translateX(200px) translateZ(0px)";
  const v2 = "translateX(-200px) translateZ(0px)";
  // const v3 = "translateX(200px) translateZ(0px)";

  return (
    <section id="aboutme" className="relative h-auto p-8 w-full mx-auto max-w-[1200px] min-h-screen text-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-start lg:gap-24 px-16">
        <ScrollEffect transformValor={v1}>
          <figure className="my-12 max-w-[25rem] lg:order-2 duration-[1000ms]">
            <img src="https://firebasestorage.googleapis.com/v0/b/sandra-s-blog.appspot.com/o/img20230415_04363926-PhotoRoom%20(1).png?alt=media&token=1d24dab5-9f64-4c9c-b0fe-b25e19b4423a" alt="Sandra's photo" />
          </figure>
        </ScrollEffect>
        <article>
          <div className="lg:pt-[10rem]">
            <ScrollEffect transformValor={v2}>
              <h1 className="font-poppins text-2xl lg:mt-[10rem] xl:text-[3rem] xl:leading-[3.5rem] font-bold w-full mb-8 duration-1000">
                About{" "}
                <span className="text-transparent text-gradient">
                  Sandra Maldonado
                </span>
              </h1>
              <p className="font-poppins xl:text-lg font-medium text-justify duration-1000">
                Ingeniera civil con formación técnica administrativa en el diseño, planificación e implementación de proyectos de obra civil e intervenciones de conservación ambiental. Cuento con experiencia en consultoría e interventoría de obras civiles, estimación de presupuestos, informes técnicos y planos. He participado en la elaboración de propuestas de intervención ambiental para la recuperación y conservación de un cuerpo de agua superficial, y he apoyado en el análisis del estado degradación de un botadero a cielo abierto clausurado. 
                Experiencia en el campo de investigación en temas relacionados a estudios de movilidad, calidad de aire e hidrología. Habilidades destacadas en el manejo de programas especializados de ingeniería, herramientas Office y Sistemas de Información Geográfica. Dominio del idioma inglés.
              </p>
            </ScrollEffect>
            <ScrollEffect transformValor={v2}>

            <div className="flex flex-row justify-center my-12 lg:mt-4 gap-8 duration-1000">
              <a
                onClick={handleDownload}
                className="w-[8rem] xl:w-[10rem] xl:h-[2.9rem] xl:text-[1.2rem]  min-w-[8rem] p-2 font-poppins font-semibold text-[14px] rounded-full cursor-pointer   bg-teal-700 text-white"
                href="/"
              >
                CV Download
              </a>
              <a
                className="w-[8rem] xl:w-[10rem] xl:h-[2.9rem] xl:text-[1.2rem] min-w-[8rem] p-2 font-poppins font-semibold text-[14px] rounded-full cursor-pointer   bg-teal-700 text-white"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
            </ScrollEffect>

            {/* <ScrollEffect transformValor={v3}>
              <div className="flex flex-col justify-between border-t-black duration-1000">
                <h2 className="font-poppins text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ABD7F] to-[#769A9A]">
                  Certificates and license
                </h2>
                <ul className="font-poppins font-bold text-base mt-6 text-left list-disc list-outside marker:text-[#4ABD7F]">
                  <li className="pb-2">Civil engineer</li>
                  <li className="py-2">CAD</li>
                  <li className="py-2">Modelation</li>
                  <li className="py-2">R Studio</li>
                </ul>
              </div>
            </ScrollEffect> */}
          </div>
        </article>
      </div>
    </section>
  );
}
