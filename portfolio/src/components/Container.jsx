
const Container = ({onfocusProjec}) => {
  
  return (
    <section  className="w-[1100px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[24px] max-w-full text-center text-21xl text-white font-roboto">
      <h1 className="m-0 w-[520px] relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[29px] mq1025:text-13xl mq1025:leading-[38px]">
       Soluciones Tecnologicas L.A.
      </h1>
      <div className="w-[520px] relative text-base leading-[24px] inline-block max-w-full">
        Transformando Ideas en Realidad
      </div>
      
      <div className="w-[520px] overflow-hidden flex flex-row flex-wrap items-center justify-center py-0 px-[68px] box-border gap-[12px] max-w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
      <button className="p-2 h-10 rounded-md hover:brightness-110 hover:animate-pulse font-bold bg-indigo-500 shadow-lg shadow-indigo-500/50 self-stretch  relative text-sm leading-[20px] font-roboto text-white text-center flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0 min-w-[90px]" onClick={onfocusProjec}>Desarrollo Web</button>
      <button className="p-2 h-10 rounded-md hover:brightness-110 hover:animate-pulse font-bold bg-indigo-500 shadow-lg shadow-indigo-500/50 self-stretch  relative text-sm leading-[20px] font-roboto text-white text-center flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0 min-w-[90px]">Desarrollo De Software</button>
      <button className="p-2 h-10 rounded-md hover:brightness-110 hover:animate-pulse font-bold bg-indigo-500 shadow-lg shadow-indigo-500/50 self-stretch  relative text-sm leading-[20px] font-roboto text-white text-center flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0 min-w-[90px]">Reparacion de Computadoras</button>
      </div>
    </section>
  );
};

export default Container;
