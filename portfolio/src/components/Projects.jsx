import Card from "./Card";
import { useRef, useEffect} from "react";
import { ImgCustom } from "./ImgCustom";
import banner1 from "../assets/banner1.png"
import banner2 from "../assets/banner2.png"
import pc from "../assets/pcs.png"
const Projects = ({shouldFocus} ) => {

  const componentRef = useRef(null);
  useEffect(() => {
    componentRef.current.scrollIntoView();
  }, [shouldFocus]);
  return (
    
    <div  ref={componentRef} className="w-[1440px] max-w-full overflow-hidden flex flex-col items-start justify-start py-[60px] px-0 box-border gap-[60px] tracking-[normal] mq750:gap-[30px_60px] mx-auto">
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-center text-21xl text-black font-roboto">
        <div className="w-[1100px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <h1 className="m-0 w-[520px] relative text-inherit leading-[48px] font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-5xl mq450:leading-[29px] mq750:text-13xl mq750:leading-[38px]">
              Servicios
            </h1>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-5 px-0 box-border gap-[40px] max-w-full mq675:gap-[20px]">
            <Card
              title="Desarrollo de Paginas Web"
              url={banner1}
              subtitle="Ver mas!!"
            />
            <Card
              title="Desarrollo de Software"
              url={banner2}
              subtitle="Ver Proyectos"
            />
            <Card
              title="Reparacion de Computadoras"
              url={pc}
              subtitle="Servicio Tecnico certificado"
            />
          </div>
        </div>
      </section>
      <img
        className="self-stretch h-[0.5px] relative max-w-full overflow-hidden shrink-0"
        alt=""
        src="/v-e-c-t-o-r.svg"
      />
    </div>
  );
};

export default Projects;
