import Article from "./Article";
import { ImgCustom } from "./ImgCustom";
import logo from "../assets/Desarrollo de Software.png"
import code from "../assets/svg/code.svg"
import computer from "../assets/svg/computer.svg"
import fixed from "../assets/svg/fixed.svg"
import data from "../assets/svg/data.svg"
const Feature = () => {
  return (
    <div className="mx-auto w-[1440px] max-w-full overflow-hidden flex flex-col items-start justify-start pt-[60px] px-0 pb-20 box-border gap-[80px] tracking-[normal] mq450:gap-[20px_80px] mq750:gap-[40px_80px]">
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-21xl text-black font-roboto">
        <div className="w-[1100px] flex flex-row flex-wrap items-start justify-start gap-[60px] max-w-full mq1100:gap-[30px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[42px] min-w-[338px] max-w-full mq450:min-w-full mq750:gap-[21px_42px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq1025:text-13xl mq1025:leading-[38px]">
              Que Ofrecemos!
            </h1>
            <Article
              title="Desarrollo de Software Personalizado"
              subtitle="Desarrollamos cualquier tipo de software que se adapta a tus necesidades y la de tu empresa."
              url={code}
            />
            <Article
              title="Tecnologías de vanguardia"
              subtitle="Utilizando las últimas tecnologías para crear soluciones innovadoras."
              url={data}
            />
            <Article
              title="Acompañamiento post Produccion"
              subtitle="Ofrecemos servicio de mantenimiento una ves terminado el producto"
              url={fixed}
            />
            <Article
              title="Mantenimiento de Software de Terceros"
              subtitle="Si cuentas con la necesidad de realizar actualizaciones con tu software actual puedes contactarnos."
              url={computer}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border min-w-[338px] max-w-full mq450:min-w-full">
            <ImgCustom url={logo} alt={""} style ={" self-stretch h-[376px] relative rounded-md bg-gainsboro object-contain h-full mt-4 "} />            
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

export default Feature;
