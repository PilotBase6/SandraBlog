import ScrollEffect from "/src/components/ScrollEffects.jsx";


export default function Service() {

const v1="translateY(-200px) translateZ(0px)";

  return (
    <section
      id="service"
      className="relative h-auto xl:pt-20  p-8 w-full mx-auto max-w-[1200px] min-h-screen text-center"
    >
      <div>
      <ScrollEffect transformValor={v1} >
        <h1 className="text-transparent text-gradient font-poppins xs:text-3xl md:text-4xl lg:text-5xl font-bold w-full mb-8 duration-1000">
          Mis servicios
        </h1>
        </ScrollEffect>
        <ul className="font-poppins xl:mt-16 grid xl:grid-cols-2 place-items-center xs:gap-20 gap-8">
      <ScrollEffect transformValor={v1} >
          <li className="xs:w-full xs:px-4 w-[45vw] h-auto duration-1000">
            <figure>
              <svg
                className="none w-full"
                viewBox="0 0 64 80"
                width="4rem"
                height="4rem"
                fill="#9B9B9B"
              >
                <path d="M32,2A19,19,0,1,0,51,21,19.017,19.017,0,0,0,32,2Zm8.43,4.26a17.005,17.005,0,0,1,8.4,12.48l-2.34,1.4a.994.994,0,0,0-.46.62L44.1,28.49l-.75.74.64-5.11a.988.988,0,0,0-.54-1.01l-3.7-1.86L38,17.76V14.72l2.32-.77A1.014,1.014,0,0,0,41,13V10a1.033,1.033,0,0,0-.29-.71L39.3,7.89ZM15,21c0-.49.03-.97.07-1.45l1.29.32L19,24.28V28a1.033,1.033,0,0,0,.29.71l3.82,3.82,1.07,3.55A17.01,17.01,0,0,1,15,21ZM26.58,37.1l-1.62-5.39a1.119,1.119,0,0,0-.25-.42L21,27.59V24a1,1,0,0,0-.14-.51l-3-5a.994.994,0,0,0-.62-.46l-1.89-.47A17.069,17.069,0,0,1,26.93,4.77L29,7.35v2.8l-5.16.86A1,1,0,0,0,23,12v1.62l-1.7-.56a1,1,0,0,0-1.26.64l-.99,2.99a1,1,0,0,0,.06.76l2,4a1.021,1.021,0,0,0,.73.54l5.85.97,2.79,1.4-2.25,3.02a1.031,1.031,0,0,0-.17.35l-1.03,4.02a1.015,1.015,0,0,0,0,.49l1.34,5.36A17.494,17.494,0,0,1,26.58,37.1ZM32,38a14.716,14.716,0,0,1-1.49-.08L29.03,32l.92-3.58L32.8,24.6a1,1,0,0,0-.35-1.49l-4-2a1,1,0,0,0-.29-.1l-5.49-.91-1.59-3.18.55-1.65,2.06.68A1,1,0,0,0,25,15V12.85l5.16-.86A1,1,0,0,0,31,11V7a1.026,1.026,0,0,0-.22-.63l-1.69-2.1A16.491,16.491,0,0,1,32,4a16.857,16.857,0,0,1,6.63,1.35L37.18,7.43a1,1,0,0,0,.11,1.28L39,10.41v1.87l-2.32.77A1.014,1.014,0,0,0,36,14v4a1,1,0,0,0,.11.45l2,4a.939.939,0,0,0,.44.44l3.37,1.69-.91,7.3a1,1,0,0,0,.55,1.02A.976.976,0,0,0,42,33a1.007,1.007,0,0,0,.71-.29l3-3a.953.953,0,0,0,.26-.47l1.9-7.6L49,20.97V21A17.024,17.024,0,0,1,32,38Z" />
                <path d="M59.73,27.36a4.578,4.578,0,0,0,.03-.53,4.02,4.02,0,0,0-3.18-3.91,4.079,4.079,0,0,0-4.7,2.97l-4.4,12.66a1.632,1.632,0,0,0-.19.09l-8.84,5.18A9.017,9.017,0,0,0,34,51.58V61a1,1,0,0,0,1,1H47a1,1,0,0,0,1-1V58.8a3.039,3.039,0,0,1,1-2.24l6.76-6.01a4.931,4.931,0,0,0,1.52-2.45l4.35-16.23a4.421,4.421,0,0,0,.13-1.04A4.019,4.019,0,0,0,59.73,27.36Zm-5.94-.88a2.113,2.113,0,0,1,2.38-1.6,2,2,0,0,1,1.59,1.95v.01a4.117,4.117,0,0,0-3.89,3.07l-2.79,8.61a4.013,4.013,0,0,0-.75-.29,3.816,3.816,0,0,0-.59-.09Zm5.9,4.87L55.34,47.58a2.965,2.965,0,0,1-.9,1.47l-6.77,6.01A5.056,5.056,0,0,0,46,58.8V60H36V51.58a7.052,7.052,0,0,1,3.46-6.04l8.83-5.17a2.027,2.027,0,0,1,2.47.36c.04.06.23.3.27.37a2,2,0,0,1-.74,2.73l-5.73,3.31a1,1,0,0,0,1,1.73l5.73-3.31a4,4,0,0,0,1.47-5.46.879.879,0,0,0-.06-.1l3.09-9.52a2.113,2.113,0,0,1,2.38-1.6,2,2,0,0,1,1.59,1.95A1.722,1.722,0,0,1,59.69,31.35Z" />
                <path d="M25.55,43.82l-8.84-5.19c-.06-.03-.13-.05-.19-.08L12.15,25.96a4.112,4.112,0,0,0-4.74-3.04,4.021,4.021,0,0,0-3.17,3.91,4.578,4.578,0,0,0,.03.53,4.019,4.019,0,0,0-2.03,3.47,4.421,4.421,0,0,0,.13,1.04L6.72,48.09a4.916,4.916,0,0,0,1.52,2.46l6.75,6.01A3.012,3.012,0,0,1,16,58.8V61a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V51.58A9.017,9.017,0,0,0,25.55,43.82ZM6.24,26.83a2,2,0,0,1,1.58-1.95,2.157,2.157,0,0,1,2.42,1.67l4.02,11.59a3.816,3.816,0,0,0-.59.09,4.013,4.013,0,0,0-.75.29l-2.77-8.56a4.159,4.159,0,0,0-3.91-3.12ZM28,60H18V58.8a5.03,5.03,0,0,0-1.68-3.74L9.56,49.05a2.965,2.965,0,0,1-.9-1.47L4.31,31.35a1.722,1.722,0,0,1-.07-.52,2,2,0,0,1,1.58-1.95,2.152,2.152,0,0,1,2.41,1.65L11.3,40a.879.879,0,0,0-.06.1,4,4,0,0,0,1.47,5.46l5.73,3.31a1,1,0,0,0,1-1.73l-5.73-3.31a2,2,0,0,1-.74-2.73c.04-.07.3-.4.315-.415A2,2,0,0,1,14,40.227c.062-.022.125-.041.19-.057a1.985,1.985,0,0,1,1.51.19l8.84,5.18A7.052,7.052,0,0,1,28,51.58Z" />
              </svg>
            </figure>
            <h2 className="font-bold pb-2 w-full text-center xl:px-16 ">Consultor especialista en análisis espacial.</h2>
            <p className="w-full text-justify  px-4 xl:px-16">Orientado a la evaluación de sistemas urbanos y su impacto en diferentes entornos naturales, selección de áreas prioritarias y en el diseño de estrategias de intervención con obras de infraestructura civil y de conservación.</p>
          </li>
          </ScrollEffect>
      <ScrollEffect transformValor={v1} >
          <li className="xs:w-full xs:px-4 w-[45vw] h-auto duration-1000">
            <figure>
              <svg
                className="none w-full"
                viewBox="0 0 64 80"
                width="4rem"
                height="4rem"
                fill="#9B9B9B"
              >
                <path d="M32,2A19,19,0,1,0,51,21,19.017,19.017,0,0,0,32,2Zm8.43,4.26a17.005,17.005,0,0,1,8.4,12.48l-2.34,1.4a.994.994,0,0,0-.46.62L44.1,28.49l-.75.74.64-5.11a.988.988,0,0,0-.54-1.01l-3.7-1.86L38,17.76V14.72l2.32-.77A1.014,1.014,0,0,0,41,13V10a1.033,1.033,0,0,0-.29-.71L39.3,7.89ZM15,21c0-.49.03-.97.07-1.45l1.29.32L19,24.28V28a1.033,1.033,0,0,0,.29.71l3.82,3.82,1.07,3.55A17.01,17.01,0,0,1,15,21ZM26.58,37.1l-1.62-5.39a1.119,1.119,0,0,0-.25-.42L21,27.59V24a1,1,0,0,0-.14-.51l-3-5a.994.994,0,0,0-.62-.46l-1.89-.47A17.069,17.069,0,0,1,26.93,4.77L29,7.35v2.8l-5.16.86A1,1,0,0,0,23,12v1.62l-1.7-.56a1,1,0,0,0-1.26.64l-.99,2.99a1,1,0,0,0,.06.76l2,4a1.021,1.021,0,0,0,.73.54l5.85.97,2.79,1.4-2.25,3.02a1.031,1.031,0,0,0-.17.35l-1.03,4.02a1.015,1.015,0,0,0,0,.49l1.34,5.36A17.494,17.494,0,0,1,26.58,37.1ZM32,38a14.716,14.716,0,0,1-1.49-.08L29.03,32l.92-3.58L32.8,24.6a1,1,0,0,0-.35-1.49l-4-2a1,1,0,0,0-.29-.1l-5.49-.91-1.59-3.18.55-1.65,2.06.68A1,1,0,0,0,25,15V12.85l5.16-.86A1,1,0,0,0,31,11V7a1.026,1.026,0,0,0-.22-.63l-1.69-2.1A16.491,16.491,0,0,1,32,4a16.857,16.857,0,0,1,6.63,1.35L37.18,7.43a1,1,0,0,0,.11,1.28L39,10.41v1.87l-2.32.77A1.014,1.014,0,0,0,36,14v4a1,1,0,0,0,.11.45l2,4a.939.939,0,0,0,.44.44l3.37,1.69-.91,7.3a1,1,0,0,0,.55,1.02A.976.976,0,0,0,42,33a1.007,1.007,0,0,0,.71-.29l3-3a.953.953,0,0,0,.26-.47l1.9-7.6L49,20.97V21A17.024,17.024,0,0,1,32,38Z" />
                <path d="M59.73,27.36a4.578,4.578,0,0,0,.03-.53,4.02,4.02,0,0,0-3.18-3.91,4.079,4.079,0,0,0-4.7,2.97l-4.4,12.66a1.632,1.632,0,0,0-.19.09l-8.84,5.18A9.017,9.017,0,0,0,34,51.58V61a1,1,0,0,0,1,1H47a1,1,0,0,0,1-1V58.8a3.039,3.039,0,0,1,1-2.24l6.76-6.01a4.931,4.931,0,0,0,1.52-2.45l4.35-16.23a4.421,4.421,0,0,0,.13-1.04A4.019,4.019,0,0,0,59.73,27.36Zm-5.94-.88a2.113,2.113,0,0,1,2.38-1.6,2,2,0,0,1,1.59,1.95v.01a4.117,4.117,0,0,0-3.89,3.07l-2.79,8.61a4.013,4.013,0,0,0-.75-.29,3.816,3.816,0,0,0-.59-.09Zm5.9,4.87L55.34,47.58a2.965,2.965,0,0,1-.9,1.47l-6.77,6.01A5.056,5.056,0,0,0,46,58.8V60H36V51.58a7.052,7.052,0,0,1,3.46-6.04l8.83-5.17a2.027,2.027,0,0,1,2.47.36c.04.06.23.3.27.37a2,2,0,0,1-.74,2.73l-5.73,3.31a1,1,0,0,0,1,1.73l5.73-3.31a4,4,0,0,0,1.47-5.46.879.879,0,0,0-.06-.1l3.09-9.52a2.113,2.113,0,0,1,2.38-1.6,2,2,0,0,1,1.59,1.95A1.722,1.722,0,0,1,59.69,31.35Z" />
                <path d="M25.55,43.82l-8.84-5.19c-.06-.03-.13-.05-.19-.08L12.15,25.96a4.112,4.112,0,0,0-4.74-3.04,4.021,4.021,0,0,0-3.17,3.91,4.578,4.578,0,0,0,.03.53,4.019,4.019,0,0,0-2.03,3.47,4.421,4.421,0,0,0,.13,1.04L6.72,48.09a4.916,4.916,0,0,0,1.52,2.46l6.75,6.01A3.012,3.012,0,0,1,16,58.8V61a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V51.58A9.017,9.017,0,0,0,25.55,43.82ZM6.24,26.83a2,2,0,0,1,1.58-1.95,2.157,2.157,0,0,1,2.42,1.67l4.02,11.59a3.816,3.816,0,0,0-.59.09,4.013,4.013,0,0,0-.75.29l-2.77-8.56a4.159,4.159,0,0,0-3.91-3.12ZM28,60H18V58.8a5.03,5.03,0,0,0-1.68-3.74L9.56,49.05a2.965,2.965,0,0,1-.9-1.47L4.31,31.35a1.722,1.722,0,0,1-.07-.52,2,2,0,0,1,1.58-1.95,2.152,2.152,0,0,1,2.41,1.65L11.3,40a.879.879,0,0,0-.06.1,4,4,0,0,0,1.47,5.46l5.73,3.31a1,1,0,0,0,1-1.73l-5.73-3.31a2,2,0,0,1-.74-2.73c.04-.07.3-.4.315-.415A2,2,0,0,1,14,40.227c.062-.022.125-.041.19-.057a1.985,1.985,0,0,1,1.51.19l8.84,5.18A7.052,7.052,0,0,1,28,51.58Z" />
              </svg>
            </figure>
            <h2 className="font-bold pb-2 text-center xl:px-16">Investigador asociado a proyectos de restauración ecosistemas vulnerables.</h2>
            <p className="w-full text-justify px-4 xl:px-16">Evalución de riesgo por inundación y contaminación atmosférica de microambientes urbanos,con la habilidad de síntesizar, interpretar y comunicar la información científica obtenida.</p>
          </li>
          </ScrollEffect>
      <ScrollEffect transformValor={v1} >
          <li className="xs:w-full xs:px-4 w-[45vw] h-auto duration-1000">
            <figure>
              <svg
                className="none w-full"
                viewBox="0 0 64 80"
                width="4rem"
                height="4rem"
                fill="#9B9B9B"
              >
                <path d="M32,2A19,19,0,1,0,51,21,19.017,19.017,0,0,0,32,2Zm8.43,4.26a17.005,17.005,0,0,1,8.4,12.48l-2.34,1.4a.994.994,0,0,0-.46.62L44.1,28.49l-.75.74.64-5.11a.988.988,0,0,0-.54-1.01l-3.7-1.86L38,17.76V14.72l2.32-.77A1.014,1.014,0,0,0,41,13V10a1.033,1.033,0,0,0-.29-.71L39.3,7.89ZM15,21c0-.49.03-.97.07-1.45l1.29.32L19,24.28V28a1.033,1.033,0,0,0,.29.71l3.82,3.82,1.07,3.55A17.01,17.01,0,0,1,15,21ZM26.58,37.1l-1.62-5.39a1.119,1.119,0,0,0-.25-.42L21,27.59V24a1,1,0,0,0-.14-.51l-3-5a.994.994,0,0,0-.62-.46l-1.89-.47A17.069,17.069,0,0,1,26.93,4.77L29,7.35v2.8l-5.16.86A1,1,0,0,0,23,12v1.62l-1.7-.56a1,1,0,0,0-1.26.64l-.99,2.99a1,1,0,0,0,.06.76l2,4a1.021,1.021,0,0,0,.73.54l5.85.97,2.79,1.4-2.25,3.02a1.031,1.031,0,0,0-.17.35l-1.03,4.02a1.015,1.015,0,0,0,0,.49l1.34,5.36A17.494,17.494,0,0,1,26.58,37.1ZM32,38a14.716,14.716,0,0,1-1.49-.08L29.03,32l.92-3.58L32.8,24.6a1,1,0,0,0-.35-1.49l-4-2a1,1,0,0,0-.29-.1l-5.49-.91-1.59-3.18.55-1.65,2.06.68A1,1,0,0,0,25,15V12.85l5.16-.86A1,1,0,0,0,31,11V7a1.026,1.026,0,0,0-.22-.63l-1.69-2.1A16.491,16.491,0,0,1,32,4a16.857,16.857,0,0,1,6.63,1.35L37.18,7.43a1,1,0,0,0,.11,1.28L39,10.41v1.87l-2.32.77A1.014,1.014,0,0,0,36,14v4a1,1,0,0,0,.11.45l2,4a.939.939,0,0,0,.44.44l3.37,1.69-.91,7.3a1,1,0,0,0,.55,1.02A.976.976,0,0,0,42,33a1.007,1.007,0,0,0,.71-.29l3-3a.953.953,0,0,0,.26-.47l1.9-7.6L49,20.97V21A17.024,17.024,0,0,1,32,38Z" />
                <path d="M59.73,27.36a4.578,4.578,0,0,0,.03-.53,4.02,4.02,0,0,0-3.18-3.91,4.079,4.079,0,0,0-4.7,2.97l-4.4,12.66a1.632,1.632,0,0,0-.19.09l-8.84,5.18A9.017,9.017,0,0,0,34,51.58V61a1,1,0,0,0,1,1H47a1,1,0,0,0,1-1V58.8a3.039,3.039,0,0,1,1-2.24l6.76-6.01a4.931,4.931,0,0,0,1.52-2.45l4.35-16.23a4.421,4.421,0,0,0,.13-1.04A4.019,4.019,0,0,0,59.73,27.36Zm-5.94-.88a2.113,2.113,0,0,1,2.38-1.6,2,2,0,0,1,1.59,1.95v.01a4.117,4.117,0,0,0-3.89,3.07l-2.79,8.61a4.013,4.013,0,0,0-.75-.29,3.816,3.816,0,0,0-.59-.09Zm5.9,4.87L55.34,47.58a2.965,2.965,0,0,1-.9,1.47l-6.77,6.01A5.056,5.056,0,0,0,46,58.8V60H36V51.58a7.052,7.052,0,0,1,3.46-6.04l8.83-5.17a2.027,2.027,0,0,1,2.47.36c.04.06.23.3.27.37a2,2,0,0,1-.74,2.73l-5.73,3.31a1,1,0,0,0,1,1.73l5.73-3.31a4,4,0,0,0,1.47-5.46.879.879,0,0,0-.06-.1l3.09-9.52a2.113,2.113,0,0,1,2.38-1.6,2,2,0,0,1,1.59,1.95A1.722,1.722,0,0,1,59.69,31.35Z" />
                <path d="M25.55,43.82l-8.84-5.19c-.06-.03-.13-.05-.19-.08L12.15,25.96a4.112,4.112,0,0,0-4.74-3.04,4.021,4.021,0,0,0-3.17,3.91,4.578,4.578,0,0,0,.03.53,4.019,4.019,0,0,0-2.03,3.47,4.421,4.421,0,0,0,.13,1.04L6.72,48.09a4.916,4.916,0,0,0,1.52,2.46l6.75,6.01A3.012,3.012,0,0,1,16,58.8V61a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V51.58A9.017,9.017,0,0,0,25.55,43.82ZM6.24,26.83a2,2,0,0,1,1.58-1.95,2.157,2.157,0,0,1,2.42,1.67l4.02,11.59a3.816,3.816,0,0,0-.59.09,4.013,4.013,0,0,0-.75.29l-2.77-8.56a4.159,4.159,0,0,0-3.91-3.12ZM28,60H18V58.8a5.03,5.03,0,0,0-1.68-3.74L9.56,49.05a2.965,2.965,0,0,1-.9-1.47L4.31,31.35a1.722,1.722,0,0,1-.07-.52,2,2,0,0,1,1.58-1.95,2.152,2.152,0,0,1,2.41,1.65L11.3,40a.879.879,0,0,0-.06.1,4,4,0,0,0,1.47,5.46l5.73,3.31a1,1,0,0,0,1-1.73l-5.73-3.31a2,2,0,0,1-.74-2.73c.04-.07.3-.4.315-.415A2,2,0,0,1,14,40.227c.062-.022.125-.041.19-.057a1.985,1.985,0,0,1,1.51.19l8.84,5.18A7.052,7.052,0,0,1,28,51.58Z" />
              </svg>
            </figure>
            <h2 className="font-bold pb-2 text-center xl:px-16">
            In-situ: monitoreo de calidad de aire.
            </h2>
            <p className="w-full text-justify px-4 xl:px-16">Campañas de inventario de puntos de agua, toma de muestras para análisis físico-químico de agua y sedimento, medidas de caudal (aforos) en cuerpos de agua.</p>
          </li>
          </ScrollEffect>
      <ScrollEffect transformValor={v1} >
          <li className="xs:w-full xs:px-4 w-[45vw] h-auto duration-1000">
            <figure>
              <svg
                className="none w-full"
                viewBox="0 0 64 80"
                width="4rem"
                height="4rem"
                fill="#9B9B9B"
              >
                <path d="M32,2A19,19,0,1,0,51,21,19.017,19.017,0,0,0,32,2Zm8.43,4.26a17.005,17.005,0,0,1,8.4,12.48l-2.34,1.4a.994.994,0,0,0-.46.62L44.1,28.49l-.75.74.64-5.11a.988.988,0,0,0-.54-1.01l-3.7-1.86L38,17.76V14.72l2.32-.77A1.014,1.014,0,0,0,41,13V10a1.033,1.033,0,0,0-.29-.71L39.3,7.89ZM15,21c0-.49.03-.97.07-1.45l1.29.32L19,24.28V28a1.033,1.033,0,0,0,.29.71l3.82,3.82,1.07,3.55A17.01,17.01,0,0,1,15,21ZM26.58,37.1l-1.62-5.39a1.119,1.119,0,0,0-.25-.42L21,27.59V24a1,1,0,0,0-.14-.51l-3-5a.994.994,0,0,0-.62-.46l-1.89-.47A17.069,17.069,0,0,1,26.93,4.77L29,7.35v2.8l-5.16.86A1,1,0,0,0,23,12v1.62l-1.7-.56a1,1,0,0,0-1.26.64l-.99,2.99a1,1,0,0,0,.06.76l2,4a1.021,1.021,0,0,0,.73.54l5.85.97,2.79,1.4-2.25,3.02a1.031,1.031,0,0,0-.17.35l-1.03,4.02a1.015,1.015,0,0,0,0,.49l1.34,5.36A17.494,17.494,0,0,1,26.58,37.1ZM32,38a14.716,14.716,0,0,1-1.49-.08L29.03,32l.92-3.58L32.8,24.6a1,1,0,0,0-.35-1.49l-4-2a1,1,0,0,0-.29-.1l-5.49-.91-1.59-3.18.55-1.65,2.06.68A1,1,0,0,0,25,15V12.85l5.16-.86A1,1,0,0,0,31,11V7a1.026,1.026,0,0,0-.22-.63l-1.69-2.1A16.491,16.491,0,0,1,32,4a16.857,16.857,0,0,1,6.63,1.35L37.18,7.43a1,1,0,0,0,.11,1.28L39,10.41v1.87l-2.32.77A1.014,1.014,0,0,0,36,14v4a1,1,0,0,0,.11.45l2,4a.939.939,0,0,0,.44.44l3.37,1.69-.91,7.3a1,1,0,0,0,.55,1.02A.976.976,0,0,0,42,33a1.007,1.007,0,0,0,.71-.29l3-3a.953.953,0,0,0,.26-.47l1.9-7.6L49,20.97V21A17.024,17.024,0,0,1,32,38Z" />
                <path d="M59.73,27.36a4.578,4.578,0,0,0,.03-.53,4.02,4.02,0,0,0-3.18-3.91,4.079,4.079,0,0,0-4.7,2.97l-4.4,12.66a1.632,1.632,0,0,0-.19.09l-8.84,5.18A9.017,9.017,0,0,0,34,51.58V61a1,1,0,0,0,1,1H47a1,1,0,0,0,1-1V58.8a3.039,3.039,0,0,1,1-2.24l6.76-6.01a4.931,4.931,0,0,0,1.52-2.45l4.35-16.23a4.421,4.421,0,0,0,.13-1.04A4.019,4.019,0,0,0,59.73,27.36Zm-5.94-.88a2.113,2.113,0,0,1,2.38-1.6,2,2,0,0,1,1.59,1.95v.01a4.117,4.117,0,0,0-3.89,3.07l-2.79,8.61a4.013,4.013,0,0,0-.75-.29,3.816,3.816,0,0,0-.59-.09Zm5.9,4.87L55.34,47.58a2.965,2.965,0,0,1-.9,1.47l-6.77,6.01A5.056,5.056,0,0,0,46,58.8V60H36V51.58a7.052,7.052,0,0,1,3.46-6.04l8.83-5.17a2.027,2.027,0,0,1,2.47.36c.04.06.23.3.27.37a2,2,0,0,1-.74,2.73l-5.73,3.31a1,1,0,0,0,1,1.73l5.73-3.31a4,4,0,0,0,1.47-5.46.879.879,0,0,0-.06-.1l3.09-9.52a2.113,2.113,0,0,1,2.38-1.6,2,2,0,0,1,1.59,1.95A1.722,1.722,0,0,1,59.69,31.35Z" />
                <path d="M25.55,43.82l-8.84-5.19c-.06-.03-.13-.05-.19-.08L12.15,25.96a4.112,4.112,0,0,0-4.74-3.04,4.021,4.021,0,0,0-3.17,3.91,4.578,4.578,0,0,0,.03.53,4.019,4.019,0,0,0-2.03,3.47,4.421,4.421,0,0,0,.13,1.04L6.72,48.09a4.916,4.916,0,0,0,1.52,2.46l6.75,6.01A3.012,3.012,0,0,1,16,58.8V61a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V51.58A9.017,9.017,0,0,0,25.55,43.82ZM6.24,26.83a2,2,0,0,1,1.58-1.95,2.157,2.157,0,0,1,2.42,1.67l4.02,11.59a3.816,3.816,0,0,0-.59.09,4.013,4.013,0,0,0-.75.29l-2.77-8.56a4.159,4.159,0,0,0-3.91-3.12ZM28,60H18V58.8a5.03,5.03,0,0,0-1.68-3.74L9.56,49.05a2.965,2.965,0,0,1-.9-1.47L4.31,31.35a1.722,1.722,0,0,1-.07-.52,2,2,0,0,1,1.58-1.95,2.152,2.152,0,0,1,2.41,1.65L11.3,40a.879.879,0,0,0-.06.1,4,4,0,0,0,1.47,5.46l5.73,3.31a1,1,0,0,0,1-1.73l-5.73-3.31a2,2,0,0,1-.74-2.73c.04-.07.3-.4.315-.415A2,2,0,0,1,14,40.227c.062-.022.125-.041.19-.057a1.985,1.985,0,0,1,1.51.19l8.84,5.18A7.052,7.052,0,0,1,28,51.58Z" />
              </svg>
            </figure>
            <h2 className="font-bold pb-2 text-center xl:px-16">
            Manejo de software especializados de ingeniería.
            </h2>
            <p className="w-full text-justify px-4 xl:px-16">AutoCAD Civil 3D, Hidraulic Toolbox, EPA SWMM, HEC-HMS, HEC-RAS, HEC-RAS Mapper, EPANET y Sistemas de Información Geográfica ArcGIS Pro, Qgis, Grass, Google Earth Engine.</p>
          </li>
          </ScrollEffect>
        </ul>
      </div>
      
    </section>
  );
}